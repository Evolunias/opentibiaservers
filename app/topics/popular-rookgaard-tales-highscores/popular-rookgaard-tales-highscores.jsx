import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rookgaard-tales-highscores');
}

export default function PopularRookgaardTalesHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-rookgaard-tales-highscores" />;
}
