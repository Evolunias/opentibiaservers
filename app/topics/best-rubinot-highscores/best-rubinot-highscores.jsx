import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rubinot-highscores');
}

export default function BestRubinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-rubinot-highscores" />;
}
