import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-demolidores-highscores');
}

export default function WithDiscordDemolidoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-demolidores-highscores" />;
}
