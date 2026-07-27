import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oldera-highscores');
}

export default function HighrateOlderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-oldera-highscores" />;
}
