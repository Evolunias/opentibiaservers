import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-empirebr-highscores');
}

export default function CurrentEmpirebrHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-empirebr-highscores" />;
}
