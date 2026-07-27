import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-carlinot-highscores');
}

export default function ActiveCarlinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-carlinot-highscores" />;
}
