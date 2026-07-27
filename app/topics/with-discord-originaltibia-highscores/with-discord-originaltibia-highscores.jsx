import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-originaltibia-highscores');
}

export default function WithDiscordOriginaltibiaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-originaltibia-highscores" />;
}
