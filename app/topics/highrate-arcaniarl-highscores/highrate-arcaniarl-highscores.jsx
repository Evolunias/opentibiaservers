import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-arcaniarl-highscores');
}

export default function HighrateArcaniarlHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-arcaniarl-highscores" />;
}
