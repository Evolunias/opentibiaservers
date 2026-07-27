import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nto-star-highscores');
}

export default function NewNtoStarHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-nto-star-highscores" />;
}
