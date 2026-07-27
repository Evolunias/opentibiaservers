import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-arcaniarl-highscores');
}

export default function OfficialArcaniarlHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-arcaniarl-highscores" />;
}
