import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-pvpe-tibia-private-server');
}

export default function Tibia86PvpeTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-pvpe-tibia-private-server" />;
}
