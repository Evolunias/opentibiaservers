import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-download-germany');
}

export default function PvpeDownloadGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvpe-download-germany" />;
}
