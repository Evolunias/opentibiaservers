import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classick-drakoria-highscores');
}

export default function OldSchoolClassickDrakoriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-classick-drakoria-highscores" />;
}
