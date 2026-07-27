import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-players-online-europe');
}

export default function PvpPlayersOnlineEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvp-players-online-europe" />;
}
