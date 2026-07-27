import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-pvp-enforced-players-online');
}

export default function Tibia74PvpEnforcedPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-pvp-enforced-players-online" />;
}
