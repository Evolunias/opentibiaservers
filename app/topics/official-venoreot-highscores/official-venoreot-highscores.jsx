import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-venoreot-highscores');
}

export default function OfficialVenoreotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-venoreot-highscores" />;
}
