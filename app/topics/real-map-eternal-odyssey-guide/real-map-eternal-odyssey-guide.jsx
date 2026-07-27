import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-eternal-odyssey-guide');
}

export default function RealMapEternalOdysseyGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-eternal-odyssey-guide" />;
}
