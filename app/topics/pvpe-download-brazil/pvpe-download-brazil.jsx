import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-download-brazil');
}

export default function PvpeDownloadBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvpe-download-brazil" />;
}
