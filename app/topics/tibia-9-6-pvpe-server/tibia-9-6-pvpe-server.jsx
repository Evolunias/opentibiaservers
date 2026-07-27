import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-pvpe-server');
}

export default function Tibia96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-pvpe-server" />;
}
