import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nto-star-highscores');
}

export default function FreshStartNtoStarHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nto-star-highscores" />;
}
