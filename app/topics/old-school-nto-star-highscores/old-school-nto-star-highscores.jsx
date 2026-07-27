import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nto-star-highscores');
}

export default function OldSchoolNtoStarHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-nto-star-highscores" />;
}
