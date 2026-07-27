import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-real-map-tibia-private-server');
}

export default function Tibia71RealMapTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-real-map-tibia-private-server" />;
}
