import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-alastera-highscores');
}

export default function WithDiscordAlasteraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-alastera-highscores" />;
}
