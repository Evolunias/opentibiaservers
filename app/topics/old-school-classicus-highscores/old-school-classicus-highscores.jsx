import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classicus-highscores');
}

export default function OldSchoolClassicusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-classicus-highscores" />;
}
