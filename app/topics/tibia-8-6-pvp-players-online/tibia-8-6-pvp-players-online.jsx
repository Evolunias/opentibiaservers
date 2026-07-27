import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-pvp-players-online');
}

export default function Tibia86PvpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-pvp-players-online" />;
}
