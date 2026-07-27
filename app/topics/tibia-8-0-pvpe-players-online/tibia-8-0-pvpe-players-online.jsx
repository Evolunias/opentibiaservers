import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-pvpe-players-online');
}

export default function Tibia80PvpePlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-pvpe-players-online" />;
}
