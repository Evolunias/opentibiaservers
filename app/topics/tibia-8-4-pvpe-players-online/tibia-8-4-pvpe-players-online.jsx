import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-pvpe-players-online');
}

export default function Tibia84PvpePlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-pvpe-players-online" />;
}
