import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-download-usa');
}

export default function PvpeDownloadUsaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-download-usa" />;
}
