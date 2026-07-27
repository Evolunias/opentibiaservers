import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-serenity-highscores');
}

export default function WithDiscordSerenityHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-serenity-highscores" />;
}
