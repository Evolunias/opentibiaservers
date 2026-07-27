import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realesta-highscores');
}

export default function FreshStartRealestaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realesta-highscores" />;
}
