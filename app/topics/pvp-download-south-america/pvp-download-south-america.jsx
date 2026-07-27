import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-download-south-america');
}

export default function PvpDownloadSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-download-south-america" />;
}
