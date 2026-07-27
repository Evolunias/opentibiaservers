import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolera-highscores');
}

export default function BestEvoleraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-evolera-highscores" />;
}
