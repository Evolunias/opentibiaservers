import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-pvpe-server-list');
}

export default function Tibia80PvpeServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-pvpe-server-list" />;
}
