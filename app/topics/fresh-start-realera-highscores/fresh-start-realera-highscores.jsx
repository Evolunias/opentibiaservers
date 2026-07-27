import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realera-highscores');
}

export default function FreshStartRealeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realera-highscores" />;
}
