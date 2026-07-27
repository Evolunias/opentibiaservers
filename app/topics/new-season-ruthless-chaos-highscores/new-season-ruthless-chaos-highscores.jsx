import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ruthless-chaos-highscores');
}

export default function NewSeasonRuthlessChaosHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-ruthless-chaos-highscores" />;
}
