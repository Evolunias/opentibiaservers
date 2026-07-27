import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-unline-highscores');
}

export default function BestUnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-unline-highscores" />;
}
