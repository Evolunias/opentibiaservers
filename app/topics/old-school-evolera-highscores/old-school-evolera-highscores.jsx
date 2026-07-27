import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolera-highscores');
}

export default function OldSchoolEvoleraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolera-highscores" />;
}
