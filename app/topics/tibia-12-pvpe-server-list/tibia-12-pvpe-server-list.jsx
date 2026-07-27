import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvpe-server-list');
}

export default function Tibia12PvpeServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvpe-server-list" />;
}
