import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-venoreot-highscores');
}

export default function PopularVenoreotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-venoreot-highscores" />;
}
