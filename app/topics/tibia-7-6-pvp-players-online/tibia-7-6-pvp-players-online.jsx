import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-pvp-players-online');
}

export default function Tibia76PvpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-pvp-players-online" />;
}
