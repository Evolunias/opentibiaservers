import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-blazera-highscores');
}

export default function OldSchoolBlazeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-blazera-highscores" />;
}
