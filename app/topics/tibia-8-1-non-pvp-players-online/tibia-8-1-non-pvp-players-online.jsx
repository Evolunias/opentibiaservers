import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-non-pvp-players-online');
}

export default function Tibia81NonPvpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-non-pvp-players-online" />;
}
