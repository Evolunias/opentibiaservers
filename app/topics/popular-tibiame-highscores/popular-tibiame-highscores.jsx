import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiame-highscores');
}

export default function PopularTibiameHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiame-highscores" />;
}
