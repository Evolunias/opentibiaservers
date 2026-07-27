import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-pvpe-tibia-private-server');
}

export default function Tibia772PvpeTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-pvpe-tibia-private-server" />;
}
