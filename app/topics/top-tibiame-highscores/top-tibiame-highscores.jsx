import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiame-highscores');
}

export default function TopTibiameHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-tibiame-highscores" />;
}
