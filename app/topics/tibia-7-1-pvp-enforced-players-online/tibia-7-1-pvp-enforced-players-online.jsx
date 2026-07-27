import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-pvp-enforced-players-online');
}

export default function Tibia71PvpEnforcedPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-pvp-enforced-players-online" />;
}
