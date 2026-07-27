import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-pvp-enforced-players-online');
}

export default function Tibia15PvpEnforcedPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-pvp-enforced-players-online" />;
}
