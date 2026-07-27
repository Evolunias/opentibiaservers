import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-pvpe-players-online');
}

export default function Tibia96PvpePlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-pvpe-players-online" />;
}
