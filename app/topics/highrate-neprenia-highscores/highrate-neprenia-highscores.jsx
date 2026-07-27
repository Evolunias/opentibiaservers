import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-neprenia-highscores');
}

export default function HighrateNepreniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-neprenia-highscores" />;
}
