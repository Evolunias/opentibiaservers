import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rookgaard-tales-highscores');
}

export default function ActiveRookgaardTalesHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-rookgaard-tales-highscores" />;
}
