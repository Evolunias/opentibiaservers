import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ruthless-chaos-highscores');
}

export default function OfficialRuthlessChaosHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-ruthless-chaos-highscores" />;
}
