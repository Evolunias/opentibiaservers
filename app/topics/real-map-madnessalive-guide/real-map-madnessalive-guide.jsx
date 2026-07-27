import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-madnessalive-guide');
}

export default function RealMapMadnessaliveGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-madnessalive-guide" />;
}
