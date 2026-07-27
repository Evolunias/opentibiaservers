import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-alastera-highscores');
}

export default function TopAlasteraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-alastera-highscores" />;
}
