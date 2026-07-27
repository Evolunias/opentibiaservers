import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-non-pvp-players-online');
}

export default function Tibia13NonPvpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-non-pvp-players-online" />;
}
