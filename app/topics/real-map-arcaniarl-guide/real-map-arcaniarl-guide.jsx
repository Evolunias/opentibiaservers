import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-arcaniarl-guide');
}

export default function RealMapArcaniarlGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-arcaniarl-guide" />;
}
