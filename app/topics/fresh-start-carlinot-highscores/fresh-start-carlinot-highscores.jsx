import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-carlinot-highscores');
}

export default function FreshStartCarlinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-carlinot-highscores" />;
}
