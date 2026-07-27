import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classick-drakoria-highscores');
}

export default function CurrentClassickDrakoriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-classick-drakoria-highscores" />;
}
