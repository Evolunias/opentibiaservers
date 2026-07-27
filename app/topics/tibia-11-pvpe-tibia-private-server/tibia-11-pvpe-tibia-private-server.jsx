import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvpe-tibia-private-server');
}

export default function Tibia11PvpeTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvpe-tibia-private-server" />;
}
