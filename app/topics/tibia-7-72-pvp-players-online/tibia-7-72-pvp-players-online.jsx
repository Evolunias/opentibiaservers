import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-pvp-players-online');
}

export default function Tibia772PvpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-pvp-players-online" />;
}
