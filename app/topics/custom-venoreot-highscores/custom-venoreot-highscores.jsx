import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-venoreot-highscores');
}

export default function CustomVenoreotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-venoreot-highscores" />;
}
