import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvp-players-online');
}

export default function Tibia14PvpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvp-players-online" />;
}
