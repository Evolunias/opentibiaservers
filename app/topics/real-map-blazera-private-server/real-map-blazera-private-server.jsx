import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-blazera-private-server');
}

export default function RealMapBlazeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-blazera-private-server" />;
}
