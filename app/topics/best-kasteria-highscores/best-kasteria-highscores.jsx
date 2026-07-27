import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-kasteria-highscores');
}

export default function BestKasteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-kasteria-highscores" />;
}
