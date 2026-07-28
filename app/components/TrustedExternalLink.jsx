import { assessExternalLink } from '@/lib/external-links';

const trustLabels = {
  'official-domain': 'Official domain',
  'official-download': 'Official download/source',
  'trusted-reference': 'Trusted source',
  'trusted-media': 'Verified media',
  unverified: 'Unverified',
};

export default function TrustedExternalLink({
  href,
  label,
  note,
  kind = 'reference',
  expectedDomains = [],
  allowUntrusted = false,
  className = '',
  children,
}) {
  const link = assessExternalLink(href, { kind, expectedDomains, allowUntrusted });
  if (!link.clickable) return null;

  const rel = link.trust === 'unverified'
    ? 'nofollow noopener noreferrer external'
    : 'noopener noreferrer external';

  return (
    <a href={link.href} target="_blank" rel={rel} className={className}>
      {children || (
        <>
          <span className="block font-semibold text-blue-700">{label || link.href}</span>
          {note ? <span className="mt-1 block text-sm leading-6 text-gray-700">{note}</span> : null}
          <span className="mt-2 inline-flex rounded border border-gray-200 bg-white px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-gray-500">
            {trustLabels[link.trust] || 'Trusted link'}
          </span>
        </>
      )}
    </a>
  );
}
