import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-download-usa');
}

export default function PvpEnforcedDownloadUsaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-download-usa" />;
}
