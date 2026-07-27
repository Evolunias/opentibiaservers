import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-non-pvp-players-online');
}

export default function Tibia772NonPvpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-non-pvp-players-online" />;
}
