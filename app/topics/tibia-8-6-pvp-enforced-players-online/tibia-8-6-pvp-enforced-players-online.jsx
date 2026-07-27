import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-pvp-enforced-players-online');
}

export default function Tibia86PvpEnforcedPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-pvp-enforced-players-online" />;
}
