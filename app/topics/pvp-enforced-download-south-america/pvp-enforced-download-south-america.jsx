import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-download-south-america');
}

export default function PvpEnforcedDownloadSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-download-south-america" />;
}
