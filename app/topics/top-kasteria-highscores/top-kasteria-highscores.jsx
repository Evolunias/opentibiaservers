import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-kasteria-highscores');
}

export default function TopKasteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-kasteria-highscores" />;
}
