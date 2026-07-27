import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiascape-highscores');
}

export default function BestTibiascapeHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-tibiascape-highscores" />;
}
