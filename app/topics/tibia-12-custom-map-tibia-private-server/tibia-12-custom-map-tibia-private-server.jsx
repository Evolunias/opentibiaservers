import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-custom-map-tibia-private-server');
}

export default function Tibia12CustomMapTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-custom-map-tibia-private-server" />;
}
