import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-non-pvp-players-online');
}

export default function Tibia74NonPvpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-non-pvp-players-online" />;
}
