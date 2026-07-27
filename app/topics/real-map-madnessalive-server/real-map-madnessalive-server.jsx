import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-madnessalive-server');
}

export default function RealMapMadnessaliveServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-madnessalive-server" />;
}
