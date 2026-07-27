import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-non-pvp-players-online');
}

export default function Tibia12NonPvpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-non-pvp-players-online" />;
}
