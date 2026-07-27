import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-pvpe-open-tibia-server');
}

export default function Tibia81PvpeOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-pvpe-open-tibia-server" />;
}
