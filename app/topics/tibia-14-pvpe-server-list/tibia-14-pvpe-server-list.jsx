import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvpe-server-list');
}

export default function Tibia14PvpeServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvpe-server-list" />;
}
