import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-venoreot-highscores');
}

export default function NoResetVenoreotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-venoreot-highscores" />;
}
