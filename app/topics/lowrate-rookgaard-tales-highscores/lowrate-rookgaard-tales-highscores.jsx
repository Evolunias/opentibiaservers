import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rookgaard-tales-highscores');
}

export default function LowrateRookgaardTalesHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rookgaard-tales-highscores" />;
}
