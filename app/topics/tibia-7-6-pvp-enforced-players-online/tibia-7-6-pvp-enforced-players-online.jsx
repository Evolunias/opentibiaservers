import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-pvp-enforced-players-online');
}

export default function Tibia76PvpEnforcedPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-pvp-enforced-players-online" />;
}
