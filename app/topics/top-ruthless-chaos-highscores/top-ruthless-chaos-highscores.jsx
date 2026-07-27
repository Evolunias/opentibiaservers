import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ruthless-chaos-highscores');
}

export default function TopRuthlessChaosHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-ruthless-chaos-highscores" />;
}
