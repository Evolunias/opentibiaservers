import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-neprenia-highscores');
}

export default function BestNepreniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-neprenia-highscores" />;
}
