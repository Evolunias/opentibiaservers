import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-download-europe');
}

export default function PvpEnforcedDownloadEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-download-europe" />;
}
