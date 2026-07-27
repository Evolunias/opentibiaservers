import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-players-online-argentina');
}

export default function PvpEnforcedPlayersOnlineArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-players-online-argentina" />;
}
