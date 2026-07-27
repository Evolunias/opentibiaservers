import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nto-star-highscores');
}

export default function CustomNtoStarHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-nto-star-highscores" />;
}
