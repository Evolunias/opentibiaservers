import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-medivia-highscores');
}

export default function HighrateMediviaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-medivia-highscores" />;
}
