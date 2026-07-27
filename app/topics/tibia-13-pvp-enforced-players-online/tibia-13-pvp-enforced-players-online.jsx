import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-pvp-enforced-players-online');
}

export default function Tibia13PvpEnforcedPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-pvp-enforced-players-online" />;
}
