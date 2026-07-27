import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rookgaard-tales-highscores');
}

export default function HighrateRookgaardTalesHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-rookgaard-tales-highscores" />;
}
