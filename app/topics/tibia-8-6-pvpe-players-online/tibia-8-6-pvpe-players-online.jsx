import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-pvpe-players-online');
}

export default function Tibia86PvpePlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-pvpe-players-online" />;
}
