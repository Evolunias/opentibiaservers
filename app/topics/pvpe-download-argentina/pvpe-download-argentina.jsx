import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-download-argentina');
}

export default function PvpeDownloadArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-download-argentina" />;
}
