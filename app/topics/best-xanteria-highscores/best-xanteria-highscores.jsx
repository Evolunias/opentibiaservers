import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-xanteria-highscores');
}

export default function BestXanteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-xanteria-highscores" />;
}
