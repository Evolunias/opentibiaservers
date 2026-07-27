import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nto-star-highscores');
}

export default function HighrateNtoStarHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-nto-star-highscores" />;
}
