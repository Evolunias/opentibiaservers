import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-download-brazil');
}

export default function PvpEnforcedDownloadBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-download-brazil" />;
}
