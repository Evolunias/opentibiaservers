import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-pvpe-players-online');
}

export default function Tibia1098PvpePlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-pvpe-players-online" />;
}
