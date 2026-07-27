import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-pvpe-open-tibia-server');
}

export default function Tibia13PvpeOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-pvpe-open-tibia-server" />;
}
