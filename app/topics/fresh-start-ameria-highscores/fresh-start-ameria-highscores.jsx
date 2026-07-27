import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ameria-highscores');
}

export default function FreshStartAmeriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ameria-highscores" />;
}
