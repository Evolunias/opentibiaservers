import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-custom-map-tibia-private-server');
}

export default function Tibia14CustomMapTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-custom-map-tibia-private-server" />;
}
