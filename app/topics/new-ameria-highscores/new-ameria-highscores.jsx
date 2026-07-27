import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ameria-highscores');
}

export default function NewAmeriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-ameria-highscores" />;
}
