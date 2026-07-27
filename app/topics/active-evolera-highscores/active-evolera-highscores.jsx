import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolera-highscores');
}

export default function ActiveEvoleraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-evolera-highscores" />;
}
