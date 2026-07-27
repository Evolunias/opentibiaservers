import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-pvpe-tibia-private-server');
}

export default function Tibia74PvpeTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-pvpe-tibia-private-server" />;
}
