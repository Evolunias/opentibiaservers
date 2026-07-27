import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ranger-s-arcani-highscores');
}

export default function OldSchoolRangerSArcaniHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-ranger-s-arcani-highscores" />;
}
