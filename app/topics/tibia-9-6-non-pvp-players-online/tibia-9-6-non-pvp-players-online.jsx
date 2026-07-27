import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-non-pvp-players-online');
}

export default function Tibia96NonPvpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-non-pvp-players-online" />;
}
