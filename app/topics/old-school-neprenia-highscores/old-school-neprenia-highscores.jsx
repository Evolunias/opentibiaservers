import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-neprenia-highscores');
}

export default function OldSchoolNepreniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-neprenia-highscores" />;
}
