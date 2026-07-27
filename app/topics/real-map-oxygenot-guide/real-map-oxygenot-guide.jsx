import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oxygenot-guide');
}

export default function RealMapOxygenotGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-oxygenot-guide" />;
}
