import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-highscores');
}

export default function RuthlessChaosHighscoresKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-highscores" />;
}
