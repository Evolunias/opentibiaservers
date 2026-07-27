import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiascape-highscores');
}

export default function HighrateTibiascapeHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiascape-highscores" />;
}
