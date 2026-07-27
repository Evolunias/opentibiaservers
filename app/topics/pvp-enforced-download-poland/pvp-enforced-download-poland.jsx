import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-download-poland');
}

export default function PvpEnforcedDownloadPolandKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-download-poland" />;
}
