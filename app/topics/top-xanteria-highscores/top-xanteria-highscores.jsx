import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-xanteria-highscores');
}

export default function TopXanteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-xanteria-highscores" />;
}
