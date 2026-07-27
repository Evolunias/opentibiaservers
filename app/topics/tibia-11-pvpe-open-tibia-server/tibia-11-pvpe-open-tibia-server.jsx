import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvpe-open-tibia-server');
}

export default function Tibia11PvpeOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvpe-open-tibia-server" />;
}
