import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-with-players');
}

export default function PvpeServerWithPlayersKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-with-players" />;
}
