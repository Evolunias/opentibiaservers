import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oxygenot-highscores');
}

export default function HighrateOxygenotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-oxygenot-highscores" />;
}
