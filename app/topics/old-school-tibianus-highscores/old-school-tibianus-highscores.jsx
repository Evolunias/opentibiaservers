import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibianus-highscores');
}

export default function OldSchoolTibianusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibianus-highscores" />;
}
