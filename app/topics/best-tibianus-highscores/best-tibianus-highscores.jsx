import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibianus-highscores');
}

export default function BestTibianusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-tibianus-highscores" />;
}
