import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classick-drakoria-highscores');
}

export default function FreshStartClassickDrakoriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classick-drakoria-highscores" />;
}
