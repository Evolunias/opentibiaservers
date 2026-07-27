import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-empirebr-highscores');
}

export default function WithDiscordEmpirebrHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-empirebr-highscores" />;
}
