import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-empirebr-highscores');
}

export default function BestEmpirebrHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-empirebr-highscores" />;
}
