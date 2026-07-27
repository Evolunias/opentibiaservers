import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-download-germany');
}

export default function PvpEnforcedDownloadGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-download-germany" />;
}
