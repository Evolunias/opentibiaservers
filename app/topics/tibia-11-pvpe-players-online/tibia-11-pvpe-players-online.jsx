import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvpe-players-online');
}

export default function Tibia11PvpePlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvpe-players-online" />;
}
