import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eldera-highscores');
}

export default function OldSchoolElderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-eldera-highscores" />;
}
