import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiaretro-highscores');
}

export default function WithDiscordTibiaretroHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiaretro-highscores" />;
}
