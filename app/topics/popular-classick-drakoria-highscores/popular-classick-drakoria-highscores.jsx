import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classick-drakoria-highscores');
}

export default function PopularClassickDrakoriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-classick-drakoria-highscores" />;
}
