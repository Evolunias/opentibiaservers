import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiascape-highscores');
}

export default function NewSeasonTibiascapeHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiascape-highscores" />;
}
