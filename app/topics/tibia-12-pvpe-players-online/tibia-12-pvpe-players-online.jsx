import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvpe-players-online');
}

export default function Tibia12PvpePlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvpe-players-online" />;
}
