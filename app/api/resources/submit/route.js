import { NextResponse } from 'next/server'
import { getSupabaseServerClient } from '@/lib/supabase-server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const CATEGORIES = new Set([
  'engine',
  'client',
  'map',
  'datapack',
  'monsters',
  'tool',
  'other',
])

const SHA256_RE = /^[a-f0-9]{64}$/i
const EMAIL_RE =
  /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i

function clean(value, max = 500) {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, max)
}

function isHttpUrl(value) {
  try {
    const u = new URL(value)
    return u.protocol === 'http:' || u.protocol === 'https:'
  } catch {
    return false
  }
}

function isGithubOrGitlab(value) {
  try {
    const host = new URL(value).hostname.replace(/^www\./, '').toLowerCase()
    return (
      host === 'github.com' ||
      host.endsWith('.github.com') ||
      host === 'gitlab.com' ||
      host.endsWith('.gitlab.com')
    )
  } catch {
    return false
  }
}

function isVirusTotalUrl(value) {
  try {
    const u = new URL(value)
    const host = u.hostname.replace(/^www\./, '').toLowerCase()
    if (host !== 'virustotal.com') return false
    // Accept /gui/file/<hash> and legacy /file/<hash>/analysis/
    return /\/(gui\/)?file\//i.test(u.pathname)
  } catch {
    return false
  }
}

function looksLikeBinaryUrl(value) {
  if (!value) return false
  return /\.(exe|dll|msi|zip|rar|7z|gz|tgz|tar)(\?|#|$)/i.test(value)
}

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}))

    const category = clean(body.category, 32).toLowerCase()
    const title = clean(body.title, 140)
    const summary = clean(body.summary, 2000)
    const githubUrl = clean(body.github_url, 500)
    const releaseUrl = clean(body.release_url, 500)
    const license = clean(body.license, 80)
    const engineCompat = clean(body.engine_compat, 120)
    const clientCompat = clean(body.client_compat, 120)
    const notes = clean(body.notes, 2000)
    const submitterEmail = clean(body.submitter_email, 200).toLowerCase()
    const submitterName = clean(body.submitter_name, 120)
    const fileName = clean(body.file_name, 200)
    const fileVersion = clean(body.file_version, 80)
    const sha256 = clean(body.sha256, 64).toLowerCase()
    const virustotalUrl = clean(body.virustotal_url, 500)
    const hasBinary = Boolean(body.has_binary) || looksLikeBinaryUrl(releaseUrl)

    const previewUrls = Array.isArray(body.preview_urls)
      ? body.preview_urls
          .map((u) => clean(u, 500))
          .filter((u) => u && isHttpUrl(u))
          .slice(0, 8)
      : String(body.preview_urls || '')
          .split(/\n|,/)
          .map((u) => clean(u, 500))
          .filter((u) => u && isHttpUrl(u))
          .slice(0, 8)

    if (!CATEGORIES.has(category)) {
      return NextResponse.json(
        { success: false, error: 'Pick a valid category.' },
        { status: 400 }
      )
    }
    if (title.length < 3) {
      return NextResponse.json(
        { success: false, error: 'Title is required.' },
        { status: 400 }
      )
    }
    if (summary.length < 20) {
      return NextResponse.json(
        { success: false, error: 'Add a short summary (20+ characters).' },
        { status: 400 }
      )
    }
    if (!githubUrl || !isHttpUrl(githubUrl) || !isGithubOrGitlab(githubUrl)) {
      return NextResponse.json(
        {
          success: false,
          error: 'github_url must be a public GitHub or GitLab repository URL.',
        },
        { status: 400 }
      )
    }
    if (!license) {
      return NextResponse.json(
        { success: false, error: 'License is required (e.g. GPL-2.0, MIT).' },
        { status: 400 }
      )
    }
    if (releaseUrl && !isHttpUrl(releaseUrl)) {
      return NextResponse.json(
        { success: false, error: 'release_url must be a valid http(s) URL.' },
        { status: 400 }
      )
    }
    if (submitterEmail && !EMAIL_RE.test(submitterEmail)) {
      return NextResponse.json(
        { success: false, error: 'submitter_email is invalid.' },
        { status: 400 }
      )
    }

    if (hasBinary) {
      if (!fileName || !fileVersion) {
        return NextResponse.json(
          {
            success: false,
            error: 'Binaries require file_name and file_version.',
          },
          { status: 400 }
        )
      }
      if (!SHA256_RE.test(sha256)) {
        return NextResponse.json(
          { success: false, error: 'Binaries require a 64-char SHA-256 hex digest.' },
          { status: 400 }
        )
      }
      if (!virustotalUrl || !isVirusTotalUrl(virustotalUrl)) {
        return NextResponse.json(
          {
            success: false,
            error:
              'Binaries require a VirusTotal file URL (virustotal.com/.../file/<hash>).',
          },
          { status: 400 }
        )
      }
      // Soft check: VT path should contain the same hash when present
      if (virustotalUrl && !virustotalUrl.toLowerCase().includes(sha256)) {
        return NextResponse.json(
          {
            success: false,
            error: 'VirusTotal URL should reference the same SHA-256 you provided.',
          },
          { status: 400 }
        )
      }
    }

    const supabase = getSupabaseServerClient()
    if (!supabase) {
      return NextResponse.json(
        { success: false, error: 'Server database is not configured.' },
        { status: 500 }
      )
    }

    const authHeader = request.headers.get('authorization') || ''
    let submitterUserId = null
    if (authHeader.toLowerCase().startsWith('bearer ')) {
      const token = authHeader.slice(7).trim()
      if (token) {
        const { data } = await supabase.auth.getUser(token)
        submitterUserId = data?.user?.id || null
      }
    }

    const row = {
      category,
      title,
      summary,
      github_url: githubUrl,
      release_url: releaseUrl || null,
      license,
      engine_compat: engineCompat || null,
      client_compat: clientCompat || null,
      preview_urls: previewUrls,
      has_binary: hasBinary,
      file_name: hasBinary ? fileName : null,
      file_version: hasBinary ? fileVersion : null,
      sha256: hasBinary ? sha256 : null,
      virustotal_url: hasBinary ? virustotalUrl : null,
      submitter_user_id: submitterUserId,
      submitter_email: submitterEmail || null,
      submitter_name: submitterName || null,
      notes: notes || null,
      status: 'pending',
    }

    const { data, error } = await supabase
      .from('resource_submissions')
      .insert(row)
      .select('id, status, created_at')
      .maybeSingle()

    if (error) {
      console.error('[resources/submit]', error.message)
      return NextResponse.json(
        { success: false, error: error.message || 'Could not save submission.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, submission: data })
  } catch (err) {
    console.error('[resources/submit] unexpected', err?.message || err)
    return NextResponse.json(
      { success: false, error: 'Submission failed.' },
      { status: 500 }
    )
  }
}