import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-empirebr-highscores');
}

export default function HighrateEmpirebrHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-empirebr-highscores" />;
}
