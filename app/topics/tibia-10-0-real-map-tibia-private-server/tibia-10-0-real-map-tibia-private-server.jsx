import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-real-map-tibia-private-server');
}

export default function Tibia100RealMapTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-real-map-tibia-private-server" />;
}
