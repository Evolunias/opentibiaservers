import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realesta-highscores');
}

export default function NewSeasonRealestaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-realesta-highscores" />;
}
