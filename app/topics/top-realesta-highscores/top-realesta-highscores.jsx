import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realesta-highscores');
}

export default function TopRealestaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-realesta-highscores" />;
}
