import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-venoreot-highscores');
}

export default function HighrateVenoreotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-venoreot-highscores" />;
}
