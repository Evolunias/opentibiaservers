import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-custom-map-tibia-private-server');
}

export default function Tibia76CustomMapTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-custom-map-tibia-private-server" />;
}
