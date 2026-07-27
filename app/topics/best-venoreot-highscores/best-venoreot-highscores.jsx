import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-venoreot-highscores');
}

export default function BestVenoreotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-venoreot-highscores" />;
}
