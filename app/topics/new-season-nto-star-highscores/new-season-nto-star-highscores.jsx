import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nto-star-highscores');
}

export default function NewSeasonNtoStarHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-nto-star-highscores" />;
}
