import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-alastera-highscores');
}

export default function CustomAlasteraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-alastera-highscores" />;
}
