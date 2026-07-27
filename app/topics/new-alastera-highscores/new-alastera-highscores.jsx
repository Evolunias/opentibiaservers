import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-alastera-highscores');
}

export default function NewAlasteraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-alastera-highscores" />;
}
