import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-imperianic-highscores');
}

export default function CurrentImperianicHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-imperianic-highscores" />;
}
