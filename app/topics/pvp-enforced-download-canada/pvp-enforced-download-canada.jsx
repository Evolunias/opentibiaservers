import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-download-canada');
}

export default function PvpEnforcedDownloadCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-download-canada" />;
}
