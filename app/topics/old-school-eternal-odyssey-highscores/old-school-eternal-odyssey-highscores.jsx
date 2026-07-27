import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eternal-odyssey-highscores');
}

export default function OldSchoolEternalOdysseyHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-eternal-odyssey-highscores" />;
}
