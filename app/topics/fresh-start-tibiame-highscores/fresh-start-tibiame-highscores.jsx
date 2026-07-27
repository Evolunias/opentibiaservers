import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiame-highscores');
}

export default function FreshStartTibiameHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiame-highscores" />;
}
