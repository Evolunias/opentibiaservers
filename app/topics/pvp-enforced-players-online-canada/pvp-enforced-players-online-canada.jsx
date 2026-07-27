import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-players-online-canada');
}

export default function PvpEnforcedPlayersOnlineCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-players-online-canada" />;
}
