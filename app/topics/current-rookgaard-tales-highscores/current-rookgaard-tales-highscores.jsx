import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rookgaard-tales-highscores');
}

export default function CurrentRookgaardTalesHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-rookgaard-tales-highscores" />;
}
