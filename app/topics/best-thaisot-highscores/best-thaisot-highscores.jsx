import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thaisot-highscores');
}

export default function BestThaisotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-thaisot-highscores" />;
}
