import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-venoreot-highscores');
}

export default function TopVenoreotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-venoreot-highscores" />;
}
