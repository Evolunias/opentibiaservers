import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ruthless-chaos-highscores');
}

export default function PopularRuthlessChaosHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-ruthless-chaos-highscores" />;
}
