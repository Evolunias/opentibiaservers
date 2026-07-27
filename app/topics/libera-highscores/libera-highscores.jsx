import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('libera-highscores');
}

export default function LiberaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="libera-highscores" />;
}
