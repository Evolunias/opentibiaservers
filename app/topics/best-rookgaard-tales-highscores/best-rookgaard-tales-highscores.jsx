import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rookgaard-tales-highscores');
}

export default function BestRookgaardTalesHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-rookgaard-tales-highscores" />;
}
