import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-otmadness-guide');
}

export default function RealMapOtmadnessGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-otmadness-guide" />;
}
