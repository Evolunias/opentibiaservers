import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-pvpe-players-online');
}

export default function Tibia100PvpePlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-pvpe-players-online" />;
}
