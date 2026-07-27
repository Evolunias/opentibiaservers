import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-download-uk');
}

export default function PvpEnforcedDownloadUkKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-download-uk" />;
}
