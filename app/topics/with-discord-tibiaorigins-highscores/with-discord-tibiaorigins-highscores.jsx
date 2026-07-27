import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiaorigins-highscores');
}

export default function WithDiscordTibiaoriginsHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiaorigins-highscores" />;
}
