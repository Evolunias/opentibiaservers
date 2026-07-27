import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-pvpe-server-list');
}

export default function Tibia15PvpeServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-pvpe-server-list" />;
}
