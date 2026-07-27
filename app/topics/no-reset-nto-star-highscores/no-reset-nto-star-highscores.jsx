import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nto-star-highscores');
}

export default function NoResetNtoStarHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nto-star-highscores" />;
}
