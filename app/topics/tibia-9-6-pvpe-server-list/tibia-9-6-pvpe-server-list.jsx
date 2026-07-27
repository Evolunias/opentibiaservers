import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-pvpe-server-list');
}

export default function Tibia96PvpeServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-pvpe-server-list" />;
}
