import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-pvpe-tibia-private-server');
}

export default function Tibia71PvpeTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-pvpe-tibia-private-server" />;
}
