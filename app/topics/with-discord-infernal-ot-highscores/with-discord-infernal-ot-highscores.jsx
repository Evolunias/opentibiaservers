import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-infernal-ot-highscores');
}

export default function WithDiscordInfernalOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-infernal-ot-highscores" />;
}
