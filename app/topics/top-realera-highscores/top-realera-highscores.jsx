import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realera-highscores');
}

export default function TopRealeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-realera-highscores" />;
}
