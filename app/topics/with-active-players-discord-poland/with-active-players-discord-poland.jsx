import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-discord-poland');
}

export default function WithActivePlayersDiscordPolandKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-discord-poland" />;
}
