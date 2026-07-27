import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-pvp-enforced-players-online');
}

export default function Tibia854PvpEnforcedPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-pvp-enforced-players-online" />;
}
