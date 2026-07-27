import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-pvpe-tibia-private-server');
}

export default function Tibia81PvpeTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-pvpe-tibia-private-server" />;
}
