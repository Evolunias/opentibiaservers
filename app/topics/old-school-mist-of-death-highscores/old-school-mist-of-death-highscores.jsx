import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-mist-of-death-highscores');
}

export default function OldSchoolMistOfDeathHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-mist-of-death-highscores" />;
}
