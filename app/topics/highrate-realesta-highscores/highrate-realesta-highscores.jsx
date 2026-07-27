import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realesta-highscores');
}

export default function HighrateRealestaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-realesta-highscores" />;
}
