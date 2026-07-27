import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nto-star-highscores');
}

export default function WithDiscordNtoStarHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nto-star-highscores" />;
}
