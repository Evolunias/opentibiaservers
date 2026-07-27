import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-empirebr-highscores');
}

export default function FreshStartEmpirebrHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-empirebr-highscores" />;
}
