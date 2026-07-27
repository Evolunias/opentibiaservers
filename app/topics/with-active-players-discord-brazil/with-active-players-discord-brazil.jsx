import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-discord-brazil');
}

export default function WithActivePlayersDiscordBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-discord-brazil" />;
}
