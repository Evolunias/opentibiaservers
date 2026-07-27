import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-pvpe-server-list');
}

export default function Tibia84PvpeServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-pvpe-server-list" />;
}
