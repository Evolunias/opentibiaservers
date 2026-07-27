import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-alastera-highscores');
}

export default function ActiveAlasteraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-alastera-highscores" />;
}
