import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-download-uk');
}

export default function PvpeDownloadUkKeywordPage() {
  return <StaticKeywordPage slug="pvpe-download-uk" />;
}
