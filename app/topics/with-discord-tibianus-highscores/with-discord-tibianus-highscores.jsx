import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibianus-highscores');
}

export default function WithDiscordTibianusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibianus-highscores" />;
}
