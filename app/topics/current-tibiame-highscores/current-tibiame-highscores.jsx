import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiame-highscores');
}

export default function CurrentTibiameHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-tibiame-highscores" />;
}
