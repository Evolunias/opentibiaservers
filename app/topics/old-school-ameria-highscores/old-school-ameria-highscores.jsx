import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ameria-highscores');
}

export default function OldSchoolAmeriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-ameria-highscores" />;
}
