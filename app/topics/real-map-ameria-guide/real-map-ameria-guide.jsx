import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ameria-guide');
}

export default function RealMapAmeriaGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-ameria-guide" />;
}
