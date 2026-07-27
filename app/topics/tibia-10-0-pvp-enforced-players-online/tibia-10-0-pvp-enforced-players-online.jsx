import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-pvp-enforced-players-online');
}

export default function Tibia100PvpEnforcedPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-pvp-enforced-players-online" />;
}
