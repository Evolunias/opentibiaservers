import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-canob-guide');
}

export default function RealMapCanobGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-canob-guide" />;
}
