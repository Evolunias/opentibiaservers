import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('julera-highscores');
}

export default function JuleraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="julera-highscores" />;
}
