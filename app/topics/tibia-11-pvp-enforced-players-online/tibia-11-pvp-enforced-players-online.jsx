import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvp-enforced-players-online');
}

export default function Tibia11PvpEnforcedPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvp-enforced-players-online" />;
}
