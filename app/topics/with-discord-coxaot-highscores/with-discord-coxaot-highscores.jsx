import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-coxaot-highscores');
}

export default function WithDiscordCoxaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-coxaot-highscores" />;
}
