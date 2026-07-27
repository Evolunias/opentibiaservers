import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-pvpe-players-online');
}

export default function Tibia71PvpePlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-pvpe-players-online" />;
}
