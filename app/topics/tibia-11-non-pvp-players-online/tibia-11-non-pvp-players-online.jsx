import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-non-pvp-players-online');
}

export default function Tibia11NonPvpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-non-pvp-players-online" />;
}
