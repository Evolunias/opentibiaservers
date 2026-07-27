import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realesta-highscores');
}

export default function BestRealestaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-realesta-highscores" />;
}
