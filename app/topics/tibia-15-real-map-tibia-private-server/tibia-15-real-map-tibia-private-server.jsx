import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-real-map-tibia-private-server');
}

export default function Tibia15RealMapTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-real-map-tibia-private-server" />;
}
