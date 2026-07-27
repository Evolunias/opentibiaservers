import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-pvp-players-online');
}

export default function Tibia100PvpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-pvp-players-online" />;
}
