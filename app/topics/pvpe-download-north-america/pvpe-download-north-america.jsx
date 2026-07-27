import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-download-north-america');
}

export default function PvpeDownloadNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-download-north-america" />;
}
