import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-players-online-argentina');
}

export default function EvoPlayersOnlineArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evo-players-online-argentina" />;
}
