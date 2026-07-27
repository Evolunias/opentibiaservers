import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-custom-map-tibia-private-server');
}

export default function Tibia81CustomMapTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-custom-map-tibia-private-server" />;
}
