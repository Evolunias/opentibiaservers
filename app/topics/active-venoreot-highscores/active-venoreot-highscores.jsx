import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-venoreot-highscores');
}

export default function ActiveVenoreotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-venoreot-highscores" />;
}
