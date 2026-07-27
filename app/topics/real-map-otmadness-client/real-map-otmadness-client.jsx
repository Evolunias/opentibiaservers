import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-otmadness-client');
}

export default function RealMapOtmadnessClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-otmadness-client" />;
}
