import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-retro-players-online');
}

export default function Tibia81RetroPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-retro-players-online" />;
}
