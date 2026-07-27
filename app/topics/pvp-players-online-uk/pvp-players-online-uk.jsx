import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-players-online-uk');
}

export default function PvpPlayersOnlineUkKeywordPage() {
  return <StaticKeywordPage slug="pvp-players-online-uk" />;
}
