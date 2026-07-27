import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ruthless-chaos-highscores');
}

export default function FreshStartRuthlessChaosHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ruthless-chaos-highscores" />;
}
