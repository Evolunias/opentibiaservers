import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiara-highscores');
}

export default function OldSchoolTibiaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiara-highscores" />;
}
