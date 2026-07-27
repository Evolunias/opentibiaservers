import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-season');
}

export default function PvpeServerSeasonKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-season" />;
}
