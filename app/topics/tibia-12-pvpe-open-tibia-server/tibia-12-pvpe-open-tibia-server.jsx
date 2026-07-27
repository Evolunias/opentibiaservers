import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvpe-open-tibia-server');
}

export default function Tibia12PvpeOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvpe-open-tibia-server" />;
}
