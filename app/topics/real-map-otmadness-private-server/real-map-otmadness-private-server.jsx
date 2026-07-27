import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-otmadness-private-server');
}

export default function RealMapOtmadnessPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-otmadness-private-server" />;
}
