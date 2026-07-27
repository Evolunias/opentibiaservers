import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-download-mexico');
}

export default function PvpeDownloadMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvpe-download-mexico" />;
}
