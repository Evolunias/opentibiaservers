import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classick-drakoria-highscores');
}

export default function TopClassickDrakoriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-classick-drakoria-highscores" />;
}
