import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-players-online-europe');
}

export default function PvpEnforcedPlayersOnlineEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-players-online-europe" />;
}
