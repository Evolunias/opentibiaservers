import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realera-guide');
}

export default function RealMapRealeraGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-realera-guide" />;
}
