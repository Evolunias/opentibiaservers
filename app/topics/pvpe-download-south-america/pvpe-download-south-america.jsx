import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-download-south-america');
}

export default function PvpeDownloadSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-download-south-america" />;
}
