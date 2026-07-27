import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ruthless-chaos-highscores');
}

export default function NewRuthlessChaosHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-ruthless-chaos-highscores" />;
}
