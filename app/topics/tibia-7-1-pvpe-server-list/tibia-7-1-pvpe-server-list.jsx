import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-pvpe-server-list');
}

export default function Tibia71PvpeServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-pvpe-server-list" />;
}
