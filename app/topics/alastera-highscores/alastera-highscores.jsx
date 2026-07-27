import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-highscores');
}

export default function AlasteraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="alastera-highscores" />;
}
