import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ruthless-chaos-highscores');
}

export default function LowrateRuthlessChaosHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ruthless-chaos-highscores" />;
}
