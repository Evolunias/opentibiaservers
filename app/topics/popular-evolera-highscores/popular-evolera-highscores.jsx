import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolera-highscores');
}

export default function PopularEvoleraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-evolera-highscores" />;
}
