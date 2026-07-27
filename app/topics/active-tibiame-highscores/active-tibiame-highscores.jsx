import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiame-highscores');
}

export default function ActiveTibiameHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-tibiame-highscores" />;
}
