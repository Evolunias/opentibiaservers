import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-real-map-tibia-private-server');
}

export default function Tibia81RealMapTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-real-map-tibia-private-server" />;
}
