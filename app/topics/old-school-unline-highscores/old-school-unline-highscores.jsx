import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-unline-highscores');
}

export default function OldSchoolUnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-unline-highscores" />;
}
