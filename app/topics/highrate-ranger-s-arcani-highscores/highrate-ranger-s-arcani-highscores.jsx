import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ranger-s-arcani-highscores');
}

export default function HighrateRangerSArcaniHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-ranger-s-arcani-highscores" />;
}
