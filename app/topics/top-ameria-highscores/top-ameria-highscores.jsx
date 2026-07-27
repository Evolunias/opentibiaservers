import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ameria-highscores');
}

export default function TopAmeriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-ameria-highscores" />;
}
