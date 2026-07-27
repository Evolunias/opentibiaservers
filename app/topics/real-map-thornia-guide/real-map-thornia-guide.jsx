import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thornia-guide');
}

export default function RealMapThorniaGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-thornia-guide" />;
}
