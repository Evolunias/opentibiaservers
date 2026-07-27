import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-carlinot-highscores');
}

export default function LowrateCarlinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-carlinot-highscores" />;
}
