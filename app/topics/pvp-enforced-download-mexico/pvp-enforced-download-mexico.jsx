import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-download-mexico');
}

export default function PvpEnforcedDownloadMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-download-mexico" />;
}
