import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-otmadness');
}

export default function RealMapOtmadnessKeywordPage() {
  return <StaticKeywordPage slug="real-map-otmadness" />;
}
