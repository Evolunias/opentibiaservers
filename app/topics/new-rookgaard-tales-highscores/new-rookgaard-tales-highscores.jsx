import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rookgaard-tales-highscores');
}

export default function NewRookgaardTalesHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-rookgaard-tales-highscores" />;
}
