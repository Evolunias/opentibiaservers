import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-arcaniarl-highscores');
}

export default function CurrentArcaniarlHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-arcaniarl-highscores" />;
}
