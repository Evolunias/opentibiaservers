import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-otmadness-server');
}

export default function RealMapOtmadnessServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-otmadness-server" />;
}
