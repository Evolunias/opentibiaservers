import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-kasteria-highscores');
}

export default function CustomKasteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-kasteria-highscores" />;
}
