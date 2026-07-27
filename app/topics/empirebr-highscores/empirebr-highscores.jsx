import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-highscores');
}

export default function EmpirebrHighscoresKeywordPage() {
  return <StaticKeywordPage slug="empirebr-highscores" />;
}
