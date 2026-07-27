import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oldera-guide');
}

export default function RealMapOlderaGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-oldera-guide" />;
}
