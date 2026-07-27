import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-players-online-uk');
}

export default function WithDiscordPlayersOnlineUkKeywordPage() {
  return <StaticKeywordPage slug="with-discord-players-online-uk" />;
}
