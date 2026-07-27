import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-players-online-uk');
}

export default function PvpEnforcedPlayersOnlineUkKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-players-online-uk" />;
}
