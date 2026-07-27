import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-highscores');
}

export default function VenoreotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="venoreot-highscores" />;
}
