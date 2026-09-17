import { NextResponse } from 'next/server'
import { getSupabaseServerClient } from '@/lib/supabase-server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

function cleanUrl(value) {
  if (typeof value !== 'string') return ''
  try {
    const u = new URL(value.trim())
    if (!['http:', 'https:'].includes(u.protocol)) return ''
    // Block obvious private hosts
    const host = u.hostname.toLowerCase()
    if (
      host === 'localhost' ||
      host.endsWith('.local') ||
      host === '127.0.0.1' ||
      host === '0.0.0.0' ||
      host.startsWith('10.') ||
      host.startsWith('192.168.') ||
      host.startsWith('169.254.')
    ) {
      return ''
    }
    return u.toString()
  } catch {
    return ''
  }
}

function toInt(value, fallback = 0) {
  const n = Number(value)
  if (!Number.isFinite(n) || n < 0) return fallback
  return Math.min(Math.floor(n), 1000000)
}

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}))
    const serverId = typeof body.server_id === 'string' ? body.server_id.trim() : ''
    const slug = typeof body.slug === 'string' ? body.slug.trim() : ''
    if (!serverId && !slug) {
      return NextResponse.json(
        { success: false, error: 'server_id or slug is required.' },
        { status: 400 }
      )
    }

    const supabase = getSupabaseServerClient()
    if (!supabase) {
      return NextResponse.json(
        { success: false, error: 'Database not configured.' },
        { status: 500 }
      )
    }

    let query = supabase
      .from('servers')
      .select('id, slug, status_endpoint_url, owner_user_id, user_id')
      .limit(1)
    query = serverId ? query.eq('id', serverId) : query.eq('slug', slug)
    const { data: server, error: lookupError } = await query.maybeSingle()
    if (lookupError || !server) {
      return NextResponse.json(
        { success: false, error: 'Server not found.' },
        { status: 404 }
      )
    }

    // Prefer bearer-auth owner; allow service cron with CRON_SECRET
    const authHeader = request.headers.get('authorization') || ''
    const cronSecret = process.env.CRON_SECRET || process.env.METRICS_CRON_SECRET || ''
    const isCron =
      cronSecret &&
      (request.headers.get('x-cron-secret') === cronSecret ||
        authHeader === `Bearer ${cronSecret}`)

    let authedUserId = null
    if (authHeader.toLowerCase().startsWith('bearer ') && !isCron) {
      const token = authHeader.slice(7).trim()
      const { data } = await supabase.auth.getUser(token)
      authedUserId = data?.user?.id || null
    }

    const ownerId = server.owner_user_id || server.user_id
    if (!isCron) {
      if (!authedUserId || !ownerId || authedUserId !== ownerId) {
        return NextResponse.json(
          { success: false, error: 'Only the server owner can refresh metrics.' },
          { status: 403 }
        )
      }
    }

    const endpoint = cleanUrl(body.status_endpoint_url || server.status_endpoint_url)
    if (!endpoint) {
      return NextResponse.json(
        {
          success: false,
          error:
            'Set a public HTTPS status_endpoint_url that returns JSON metrics only.',
        },
        { status: 400 }
      )
    }

    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 8000)
    let payload
    try {
      const res = await fetch(endpoint, {
        method: 'GET',
        headers: { Accept: 'application/json', 'User-Agent': 'OpenTibiaServers-Metrics/1.0' },
        signal: controller.signal,
        redirect: 'follow',
        cache: 'no-store',
      })
      clearTimeout(timer)
      if (!res.ok) {
        throw new Error(`Status endpoint HTTP ${res.status}`)
      }
      const type = String(res.headers.get('content-type') || '')
      if (!type.includes('application/json') && !type.includes('text/json')) {
        // still try parse
      }
      payload = await res.json()
    } catch (err) {
      clearTimeout(timer)
      const message = err?.message || 'Failed to fetch status endpoint.'
      await supabase
        .from('servers')
        .update({
          status_endpoint_url: endpoint,
          status_endpoint_checked_at: new Date().toISOString(),
          status_endpoint_error: message.slice(0, 300),
        })
        .eq('id', server.id)
      return NextResponse.json({ success: false, error: message }, { status: 502 })
    }

    // Metrics-only allowlist â€” ignore emails/contacts/anything else
    const playersOnline = toInt(
      payload.players_online ?? payload.online ?? payload.players ?? payload.player_count,
      0
    )
    const playersPeak = toInt(
      payload.players_peak ?? payload.peak ?? payload.max_online ?? playersOnline,
      playersOnline
    )
    const isOnline =
      typeof payload.is_online === 'boolean'
        ? payload.is_online
        : typeof payload.online === 'boolean'
          ? payload.online
          : playersOnline > 0

    const { error: updateError } = await supabase
      .from('servers')
      .update({
        status_endpoint_url: endpoint,
        players_online: playersOnline,
        players_peak: Math.max(playersPeak, playersOnline),
        is_online: isOnline,
        status_endpoint_checked_at: new Date().toISOString(),
        status_endpoint_error: null,
      })
      .eq('id', server.id)

    if (updateError) {
      return NextResponse.json(
        { success: false, error: updateError.message },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      metrics: {
        players_online: playersOnline,
        players_peak: Math.max(playersPeak, playersOnline),
        is_online: isOnline,
        source: endpoint,
      },
    })
  } catch (err) {
    console.error('[refresh-metrics]', err?.message || err)
    return NextResponse.json(
      { success: false, error: 'Metrics refresh failed.' },
      { status: 500 }
    )
  }
}