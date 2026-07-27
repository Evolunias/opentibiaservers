import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-venoreot-highscores');
}

export default function OldSchoolVenoreotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-venoreot-highscores" />;
}
