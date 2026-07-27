import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-blazera-highscores');
}

export default function HighrateBlazeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-blazera-highscores" />;
}
