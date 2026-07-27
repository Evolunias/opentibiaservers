import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-retro-players-online');
}

export default function Tibia11RetroPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-retro-players-online" />;
}
