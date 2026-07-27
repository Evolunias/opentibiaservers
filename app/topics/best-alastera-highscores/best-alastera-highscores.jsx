import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-alastera-highscores');
}

export default function BestAlasteraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-alastera-highscores" />;
}
