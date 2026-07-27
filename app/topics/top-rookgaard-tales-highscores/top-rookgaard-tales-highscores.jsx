import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rookgaard-tales-highscores');
}

export default function TopRookgaardTalesHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-rookgaard-tales-highscores" />;
}
