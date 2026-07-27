import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-real-map-tibia-private-server');
}

export default function Tibia13RealMapTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-real-map-tibia-private-server" />;
}
