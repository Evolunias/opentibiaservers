import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-players-online-usa');
}

export default function PvpPlayersOnlineUsaKeywordPage() {
  return <StaticKeywordPage slug="pvp-players-online-usa" />;
}
