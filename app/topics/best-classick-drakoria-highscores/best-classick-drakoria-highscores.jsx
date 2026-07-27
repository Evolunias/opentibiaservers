import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classick-drakoria-highscores');
}

export default function BestClassickDrakoriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-classick-drakoria-highscores" />;
}
