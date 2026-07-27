import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eldera-highscores');
}

export default function HighrateElderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-eldera-highscores" />;
}
