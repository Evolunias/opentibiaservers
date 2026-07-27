import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-real-map-players-online');
}

export default function Tibia80RealMapPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-real-map-players-online" />;
}
