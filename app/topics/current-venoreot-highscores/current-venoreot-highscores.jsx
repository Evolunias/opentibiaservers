import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-venoreot-highscores');
}

export default function CurrentVenoreotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-venoreot-highscores" />;
}
