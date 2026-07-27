import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvpe-server-list');
}

export default function Tibia11PvpeServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvpe-server-list" />;
}
