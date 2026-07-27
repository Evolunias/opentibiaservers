import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realera-highscores');
}

export default function OldSchoolRealeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-realera-highscores" />;
}
