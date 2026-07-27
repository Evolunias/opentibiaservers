import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-custom-map-tibia-private-server');
}

export default function Tibia854CustomMapTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-custom-map-tibia-private-server" />;
}
