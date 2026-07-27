import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-download-canada');
}

export default function PvpeDownloadCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-download-canada" />;
}
