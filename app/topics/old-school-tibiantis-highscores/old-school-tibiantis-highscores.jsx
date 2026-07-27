import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiantis-highscores');
}

export default function OldSchoolTibiantisHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiantis-highscores" />;
}
