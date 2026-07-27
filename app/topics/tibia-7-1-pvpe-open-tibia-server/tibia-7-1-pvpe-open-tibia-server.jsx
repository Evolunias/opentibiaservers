import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-pvpe-open-tibia-server');
}

export default function Tibia71PvpeOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-pvpe-open-tibia-server" />;
}
