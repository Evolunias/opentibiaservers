import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ameria-highscores');
}

export default function CustomAmeriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-ameria-highscores" />;
}
