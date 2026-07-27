import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ameria-highscores');
}

export default function CurrentAmeriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-ameria-highscores" />;
}
