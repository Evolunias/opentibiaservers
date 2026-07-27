import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-carlinot-highscores');
}

export default function CustomCarlinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-carlinot-highscores" />;
}
