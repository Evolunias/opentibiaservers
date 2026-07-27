import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolera-highscores');
}

export default function CurrentEvoleraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-evolera-highscores" />;
}
