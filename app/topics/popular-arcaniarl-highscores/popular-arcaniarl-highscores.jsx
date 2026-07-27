import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-arcaniarl-highscores');
}

export default function PopularArcaniarlHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-arcaniarl-highscores" />;
}
