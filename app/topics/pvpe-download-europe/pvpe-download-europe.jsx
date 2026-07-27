import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-download-europe');
}

export default function PvpeDownloadEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvpe-download-europe" />;
}
