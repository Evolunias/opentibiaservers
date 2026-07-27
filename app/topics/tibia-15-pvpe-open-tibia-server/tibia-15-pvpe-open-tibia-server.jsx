import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-pvpe-open-tibia-server');
}

export default function Tibia15PvpeOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-pvpe-open-tibia-server" />;
}
