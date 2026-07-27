import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiame-highscores');
}

export default function BestTibiameHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-tibiame-highscores" />;
}
