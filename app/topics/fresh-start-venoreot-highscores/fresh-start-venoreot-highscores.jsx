import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-venoreot-highscores');
}

export default function FreshStartVenoreotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-venoreot-highscores" />;
}
