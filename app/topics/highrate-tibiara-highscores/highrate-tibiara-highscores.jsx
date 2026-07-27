import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiara-highscores');
}

export default function HighrateTibiaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiara-highscores" />;
}
