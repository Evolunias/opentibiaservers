import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolera-highscores');
}

export default function TopEvoleraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-evolera-highscores" />;
}
