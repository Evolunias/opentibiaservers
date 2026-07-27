import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ameria-highscores');
}

export default function ActiveAmeriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-ameria-highscores" />;
}
