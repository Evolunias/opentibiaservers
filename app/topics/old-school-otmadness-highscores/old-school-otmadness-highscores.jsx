import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-otmadness-highscores');
}

export default function OldSchoolOtmadnessHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-otmadness-highscores" />;
}
