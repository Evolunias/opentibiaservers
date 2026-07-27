import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiame-highscores');
}

export default function LowrateTibiameHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiame-highscores" />;
}
