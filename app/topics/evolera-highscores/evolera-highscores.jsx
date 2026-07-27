import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-highscores');
}

export default function EvoleraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="evolera-highscores" />;
}
