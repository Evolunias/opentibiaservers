import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-blazera-highscores');
}

export default function NewSeasonBlazeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-blazera-highscores" />;
}
