import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-pvpe-players-online');
}

export default function Tibia76PvpePlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-pvpe-players-online" />;
}
