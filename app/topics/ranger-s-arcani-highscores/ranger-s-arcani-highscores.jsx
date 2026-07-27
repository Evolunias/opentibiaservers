import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-highscores');
}

export default function RangerSArcaniHighscoresKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-highscores" />;
}
