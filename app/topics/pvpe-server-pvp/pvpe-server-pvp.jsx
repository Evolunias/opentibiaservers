import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-pvp');
}

export default function PvpeServerPvpKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-pvp" />;
}
