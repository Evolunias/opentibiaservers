import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-xanteria-highscores');
}

export default function CurrentXanteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-xanteria-highscores" />;
}
