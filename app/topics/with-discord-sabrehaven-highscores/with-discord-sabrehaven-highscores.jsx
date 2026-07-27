import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-sabrehaven-highscores');
}

export default function WithDiscordSabrehavenHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-sabrehaven-highscores" />;
}
