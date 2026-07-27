import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-custom-map-tibia-private-server');
}

export default function Tibia11CustomMapTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-custom-map-tibia-private-server" />;
}
