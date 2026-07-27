import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-pvpe-tibia-private-server');
}

export default function Tibia13PvpeTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-pvpe-tibia-private-server" />;
}
