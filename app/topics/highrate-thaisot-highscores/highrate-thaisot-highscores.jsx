import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thaisot-highscores');
}

export default function HighrateThaisotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-thaisot-highscores" />;
}
