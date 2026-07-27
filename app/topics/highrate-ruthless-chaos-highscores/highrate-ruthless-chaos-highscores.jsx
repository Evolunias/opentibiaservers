import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ruthless-chaos-highscores');
}

export default function HighrateRuthlessChaosHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-ruthless-chaos-highscores" />;
}
