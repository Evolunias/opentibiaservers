import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-discord-players-online');
}

export default function Tibia12WithDiscordPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-discord-players-online" />;
}
