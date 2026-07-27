import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiame-highscores');
}

export default function CustomTibiameHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiame-highscores" />;
}
