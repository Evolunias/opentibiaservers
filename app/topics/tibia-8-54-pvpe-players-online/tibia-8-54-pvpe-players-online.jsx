import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-pvpe-players-online');
}

export default function Tibia854PvpePlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-pvpe-players-online" />;
}
