import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realera-highscores');
}

export default function NewSeasonRealeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-realera-highscores" />;
}
