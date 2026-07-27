import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-alastera-highscores');
}

export default function NewSeasonAlasteraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-alastera-highscores" />;
}
