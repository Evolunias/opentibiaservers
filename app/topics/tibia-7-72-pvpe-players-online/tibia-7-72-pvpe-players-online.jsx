import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-pvpe-players-online');
}

export default function Tibia772PvpePlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-pvpe-players-online" />;
}
