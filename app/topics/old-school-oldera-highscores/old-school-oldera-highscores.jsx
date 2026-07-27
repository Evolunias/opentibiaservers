import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oldera-highscores');
}

export default function OldSchoolOlderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-oldera-highscores" />;
}
