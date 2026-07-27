import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-highscores');
}

export default function CarlinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="carlinot-highscores" />;
}
