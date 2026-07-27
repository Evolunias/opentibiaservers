import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolera-highscores');
}

export default function FreshStartEvoleraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolera-highscores" />;
}
