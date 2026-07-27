import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-carlinot-highscores');
}

export default function HighrateCarlinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-carlinot-highscores" />;
}
