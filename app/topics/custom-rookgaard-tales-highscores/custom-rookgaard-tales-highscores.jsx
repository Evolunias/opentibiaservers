import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rookgaard-tales-highscores');
}

export default function CustomRookgaardTalesHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-rookgaard-tales-highscores" />;
}
