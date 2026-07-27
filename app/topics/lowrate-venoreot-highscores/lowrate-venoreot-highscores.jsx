import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-venoreot-highscores');
}

export default function LowrateVenoreotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-venoreot-highscores" />;
}
