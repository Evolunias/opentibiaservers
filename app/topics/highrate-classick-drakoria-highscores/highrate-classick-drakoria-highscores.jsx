import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classick-drakoria-highscores');
}

export default function HighrateClassickDrakoriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-classick-drakoria-highscores" />;
}
