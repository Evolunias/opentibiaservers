import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-non-pvp-players-online');
}

export default function Tibia84NonPvpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-non-pvp-players-online" />;
}
