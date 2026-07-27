import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-carlinot-highscores');
}

export default function NewCarlinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-carlinot-highscores" />;
}
