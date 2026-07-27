import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-mist-of-death-highscores');
}

export default function HighrateMistOfDeathHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-mist-of-death-highscores" />;
}
