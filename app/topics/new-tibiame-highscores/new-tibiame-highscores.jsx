import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiame-highscores');
}

export default function NewTibiameHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-tibiame-highscores" />;
}
