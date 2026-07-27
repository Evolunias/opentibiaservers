import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-custom-map-tibia-private-server');
}

export default function Tibia71CustomMapTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-custom-map-tibia-private-server" />;
}
