import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ruthless-chaos-highscores');
}

export default function BestRuthlessChaosHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-ruthless-chaos-highscores" />;
}
