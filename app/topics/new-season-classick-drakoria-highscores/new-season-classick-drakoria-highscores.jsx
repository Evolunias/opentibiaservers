import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classick-drakoria-highscores');
}

export default function NewSeasonClassickDrakoriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-classick-drakoria-highscores" />;
}
