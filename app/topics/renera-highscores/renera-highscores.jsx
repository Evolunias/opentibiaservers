import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('renera-highscores');
}

export default function ReneraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="renera-highscores" />;
}
