import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-xanteria-highscores');
}

export default function FreshStartXanteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-xanteria-highscores" />;
}
