import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nto-star-highscores');
}

export default function ActiveNtoStarHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-nto-star-highscores" />;
}
