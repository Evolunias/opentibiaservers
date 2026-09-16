import { NextResponse } from 'next/server'
import { getSupabaseServerClient } from '@/lib/supabase-server'
import { normalizeEmail, addContactToAudience } from '@/lib/resend'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const EMAIL_RE =
  /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i

const ALLOWED_SOURCES = new Set([
  'popup',
  'registration',
  'submit_server',
  'other',
])

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}))
    const email = normalizeEmail(body?.email)
    const name =
      typeof body?.name === 'string' ? body.name.trim().slice(0, 120) : ''
    const sourceRaw =
      typeof body?.source === 'string' ? body.source.trim().toLowerCase() : 'popup'
    const source = ALLOWED_SOURCES.has(sourceRaw) ? sourceRaw : 'other'

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { success: false, error: 'A valid email is required.' },
        { status: 400 }
      )
    }

    const supabase = getSupabaseServerClient()
    if (!supabase) {
      return NextResponse.json(
        { success: false, error: 'Server database is not configured.' },
        { status: 500 }
      )
    }

    const { data: existing, error: lookupError } = await supabase
      .from('email_subscribers')
      .select('id, status, resend_contact_id, resend_audience_id, source')
      .ilike('email', email)
      .maybeSingle()

    if (lookupError) {
      console.error('[newsletter/subscribe] lookup failed', lookupError.message)
      return NextResponse.json(
        { success: false, error: 'Unable to save subscription right now.' },
        { status: 500 }
      )
    }

    let rowId = existing?.id || null
    let resendContactId = existing?.resend_contact_id || null
    let resendAudienceId = existing?.resend_audience_id || null
    const nowIso = new Date().toISOString()
    const metadata = {
      last_source: source,
      last_subscribed_at: nowIso,
    }

    if (existing) {
      const { error: updateError } = await supabase
        .from('email_subscribers')
        .update({
          ...(name ? { full_name: name } : {}),
          status: 'subscribed',
          updated_at: nowIso,
          metadata,
        })
        .eq('id', existing.id)

      if (updateError) {
        console.warn('[newsletter/subscribe] update warning', updateError.message)
      }
    } else {
      const { data: inserted, error: insertError } = await supabase
        .from('email_subscribers')
        .insert({
          email,
          full_name: name || null,
          source,
          status: 'subscribed',
          metadata,
        })
        .select('id')
        .maybeSingle()

      if (insertError) {
        const code = insertError.code || ''
        const msg = String(insertError.message || '').toLowerCase()
        if (!(code === '23505' || msg.includes('duplicate') || msg.includes('unique'))) {
          console.error('[newsletter/subscribe] insert failed', insertError.message)
          return NextResponse.json(
            { success: false, error: 'Unable to save subscription right now.' },
            { status: 500 }
          )
        }
      } else if (inserted?.id) {
        rowId = inserted.id
      }
    }

    try {
      const firstName = name ? name.split(/\s+/)[0] : undefined
      const resendResult = await addContactToAudience({ email, firstName })
      resendContactId = resendResult.contactId || resendContactId
      resendAudienceId = resendResult.audienceId || resendAudienceId

      const patch = {
        resend_contact_id: resendContactId,
        resend_audience_id: resendAudienceId,
        updated_at: new Date().toISOString(),
      }
      if (rowId) {
        await supabase.from('email_subscribers').update(patch).eq('id', rowId)
      } else {
        await supabase.from('email_subscribers').update(patch).ilike('email', email)
      }
    } catch (resendErr) {
      console.warn(
        '[newsletter/subscribe] Resend sync failed:',
        resendErr?.message || resendErr
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[newsletter/subscribe] unexpected', err?.message || err)
    return NextResponse.json(
      { success: false, error: 'Subscription failed.' },
      { status: 500 }
    )
  }
}
