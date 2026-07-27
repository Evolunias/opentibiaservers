import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-players-online-argentina');
}

export default function PvpPlayersOnlineArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvp-players-online-argentina" />;
}
