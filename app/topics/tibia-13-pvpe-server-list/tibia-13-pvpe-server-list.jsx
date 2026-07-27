import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-pvpe-server-list');
}

export default function Tibia13PvpeServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-pvpe-server-list" />;
}
