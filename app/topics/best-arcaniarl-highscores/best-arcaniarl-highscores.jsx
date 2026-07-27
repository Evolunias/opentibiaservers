import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-arcaniarl-highscores');
}

export default function BestArcaniarlHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-arcaniarl-highscores" />;
}
