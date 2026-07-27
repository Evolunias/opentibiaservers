import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-venoreot-highscores');
}

export default function NewVenoreotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-venoreot-highscores" />;
}
