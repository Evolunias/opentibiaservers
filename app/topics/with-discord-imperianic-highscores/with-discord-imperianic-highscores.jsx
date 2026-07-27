import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-imperianic-highscores');
}

export default function WithDiscordImperianicHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-imperianic-highscores" />;
}
