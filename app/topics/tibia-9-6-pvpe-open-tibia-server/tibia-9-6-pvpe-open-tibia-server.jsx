import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-pvpe-open-tibia-server');
}

export default function Tibia96PvpeOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-pvpe-open-tibia-server" />;
}
