import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-non-pvp-players-online');
}

export default function Tibia15NonPvpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-non-pvp-players-online" />;
}
