import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiantis-highscores');
}

export default function BestTibiantisHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-tibiantis-highscores" />;
}
