import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-players-online-usa');
}

export default function PvpEnforcedPlayersOnlineUsaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-players-online-usa" />;
}
