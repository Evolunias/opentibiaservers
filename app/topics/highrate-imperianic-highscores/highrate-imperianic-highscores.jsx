import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-imperianic-highscores');
}

export default function HighrateImperianicHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-imperianic-highscores" />;
}
