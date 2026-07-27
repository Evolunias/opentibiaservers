import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-download-poland');
}

export default function PvpeDownloadPolandKeywordPage() {
  return <StaticKeywordPage slug="pvpe-download-poland" />;
}
