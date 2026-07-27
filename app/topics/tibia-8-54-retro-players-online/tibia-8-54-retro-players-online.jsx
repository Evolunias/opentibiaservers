import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-retro-players-online');
}

export default function Tibia854RetroPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-retro-players-online" />;
}
