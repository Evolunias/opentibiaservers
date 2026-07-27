import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibia-private-server-argentina');
}

export default function RealMapTibiaPrivateServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibia-private-server-argentina" />;
}
