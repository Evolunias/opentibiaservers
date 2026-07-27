import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realesta-highscores');
}

export default function OldSchoolRealestaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-realesta-highscores" />;
}
