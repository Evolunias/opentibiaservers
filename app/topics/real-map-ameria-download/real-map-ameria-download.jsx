import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ameria-download');
}

export default function RealMapAmeriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-ameria-download" />;
}
