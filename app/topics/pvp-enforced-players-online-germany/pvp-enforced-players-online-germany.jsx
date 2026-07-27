import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-players-online-germany');
}

export default function PvpEnforcedPlayersOnlineGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-players-online-germany" />;
}
