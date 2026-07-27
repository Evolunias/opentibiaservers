import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-empirebr-highscores');
}

export default function LowrateEmpirebrHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-empirebr-highscores" />;
}
