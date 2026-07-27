import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-arcaniarl-highscores');
}

export default function TopArcaniarlHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-arcaniarl-highscores" />;
}
