import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-kasteria-highscores');
}

export default function OldSchoolKasteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-kasteria-highscores" />;
}
