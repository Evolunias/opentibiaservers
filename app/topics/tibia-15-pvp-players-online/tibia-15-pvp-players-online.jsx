import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-pvp-players-online');
}

export default function Tibia15PvpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-pvp-players-online" />;
}
