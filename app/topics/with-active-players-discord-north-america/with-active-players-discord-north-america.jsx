import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-discord-north-america');
}

export default function WithActivePlayersDiscordNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-discord-north-america" />;
}
