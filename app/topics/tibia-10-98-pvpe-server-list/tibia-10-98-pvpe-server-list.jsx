import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-pvpe-server-list');
}

export default function Tibia1098PvpeServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-pvpe-server-list" />;
}
