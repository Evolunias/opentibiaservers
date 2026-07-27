import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-players-online-poland');
}

export default function PvpEnforcedPlayersOnlinePolandKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-players-online-poland" />;
}
