import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shivera-highscores');
}

export default function ShiveraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="shivera-highscores" />;
}
