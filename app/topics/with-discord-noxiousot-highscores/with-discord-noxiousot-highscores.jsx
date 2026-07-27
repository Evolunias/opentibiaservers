import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-noxiousot-highscores');
}

export default function WithDiscordNoxiousotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-noxiousot-highscores" />;
}
