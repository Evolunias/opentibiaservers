import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-carlinot-highscores');
}

export default function OfficialCarlinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-carlinot-highscores" />;
}
