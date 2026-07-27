import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-neprenia-highscores');
}

export default function FreshStartNepreniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-neprenia-highscores" />;
}
