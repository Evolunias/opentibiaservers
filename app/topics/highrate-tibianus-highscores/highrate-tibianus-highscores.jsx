import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibianus-highscores');
}

export default function HighrateTibianusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibianus-highscores" />;
}
