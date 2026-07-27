import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-highscores');
}

export default function TibiameHighscoresKeywordPage() {
  return <StaticKeywordPage slug="tibiame-highscores" />;
}
