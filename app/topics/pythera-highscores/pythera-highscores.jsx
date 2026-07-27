import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pythera-highscores');
}

export default function PytheraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="pythera-highscores" />;
}
