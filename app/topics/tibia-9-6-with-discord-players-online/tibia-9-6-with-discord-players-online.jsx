import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-with-discord-players-online');
}

export default function Tibia96WithDiscordPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-with-discord-players-online" />;
}
