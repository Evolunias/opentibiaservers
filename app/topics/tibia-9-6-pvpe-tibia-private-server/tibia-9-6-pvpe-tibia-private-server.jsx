import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-pvpe-tibia-private-server');
}

export default function Tibia96PvpeTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-pvpe-tibia-private-server" />;
}
