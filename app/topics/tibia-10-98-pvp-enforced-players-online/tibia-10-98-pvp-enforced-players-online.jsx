import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-pvp-enforced-players-online');
}

export default function Tibia1098PvpEnforcedPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-pvp-enforced-players-online" />;
}
