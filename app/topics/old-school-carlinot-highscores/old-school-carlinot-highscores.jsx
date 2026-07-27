import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-carlinot-highscores');
}

export default function OldSchoolCarlinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-carlinot-highscores" />;
}
