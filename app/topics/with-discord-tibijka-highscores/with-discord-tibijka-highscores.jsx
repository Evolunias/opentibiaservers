import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibijka-highscores');
}

export default function WithDiscordTibijkaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibijka-highscores" />;
}
