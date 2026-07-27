import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-medivia-highscores');
}

export default function OldSchoolMediviaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-medivia-highscores" />;
}
