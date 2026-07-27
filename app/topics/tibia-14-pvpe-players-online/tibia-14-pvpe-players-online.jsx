import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvpe-players-online');
}

export default function Tibia14PvpePlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvpe-players-online" />;
}
