import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-alastera-highscores');
}

export default function OldSchoolAlasteraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-alastera-highscores" />;
}
