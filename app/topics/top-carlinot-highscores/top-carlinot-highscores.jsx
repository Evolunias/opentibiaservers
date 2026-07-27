import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-carlinot-highscores');
}

export default function TopCarlinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-carlinot-highscores" />;
}
