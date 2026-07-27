import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-otmadness-ot-server');
}

export default function RealMapOtmadnessOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-otmadness-ot-server" />;
}
