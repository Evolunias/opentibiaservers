import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-neprenia-highscores');
}

export default function PopularNepreniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-neprenia-highscores" />;
}
