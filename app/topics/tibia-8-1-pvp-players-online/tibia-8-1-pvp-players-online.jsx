import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-pvp-players-online');
}

export default function Tibia81PvpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-pvp-players-online" />;
}
