import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realesta-guide');
}

export default function RealMapRealestaGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-realesta-guide" />;
}
