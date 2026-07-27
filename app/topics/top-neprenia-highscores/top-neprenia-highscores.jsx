import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-neprenia-highscores');
}

export default function TopNepreniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-neprenia-highscores" />;
}
