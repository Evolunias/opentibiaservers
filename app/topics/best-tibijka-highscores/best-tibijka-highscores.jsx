import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibijka-highscores');
}

export default function BestTibijkaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-tibijka-highscores" />;
}
