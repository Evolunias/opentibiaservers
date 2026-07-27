import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-eldera-highscores');
}

export default function NewSeasonElderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-eldera-highscores" />;
}
