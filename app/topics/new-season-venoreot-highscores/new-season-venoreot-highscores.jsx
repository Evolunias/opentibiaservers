import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-venoreot-highscores');
}

export default function NewSeasonVenoreotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-venoreot-highscores" />;
}
