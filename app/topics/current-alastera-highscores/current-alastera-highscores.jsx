import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-alastera-highscores');
}

export default function CurrentAlasteraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-alastera-highscores" />;
}
