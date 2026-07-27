import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvp-players-online');
}

export default function Tibia11PvpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvp-players-online" />;
}
