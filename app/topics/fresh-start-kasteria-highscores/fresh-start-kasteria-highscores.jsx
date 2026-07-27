import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-kasteria-highscores');
}

export default function FreshStartKasteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-kasteria-highscores" />;
}
