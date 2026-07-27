import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-canob-highscores');
}

export default function HighrateCanobHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-canob-highscores" />;
}
