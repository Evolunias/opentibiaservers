import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-harmonia-ot-highscores');
}

export default function WithDiscordHarmoniaOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-harmonia-ot-highscores" />;
}
