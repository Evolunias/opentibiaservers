import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ameria-highscores');
}

export default function HighrateAmeriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-ameria-highscores" />;
}
