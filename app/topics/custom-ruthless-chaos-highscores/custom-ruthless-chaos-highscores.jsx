import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ruthless-chaos-highscores');
}

export default function CustomRuthlessChaosHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-ruthless-chaos-highscores" />;
}
