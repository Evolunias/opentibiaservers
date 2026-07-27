import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-alastera-highscores');
}

export default function FreshStartAlasteraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-alastera-highscores" />;
}
