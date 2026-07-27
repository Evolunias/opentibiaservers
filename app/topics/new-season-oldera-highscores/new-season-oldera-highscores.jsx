import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oldera-highscores');
}

export default function NewSeasonOlderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-oldera-highscores" />;
}
