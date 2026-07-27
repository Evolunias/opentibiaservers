import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rubinot-highscores');
}

export default function CurrentRubinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-rubinot-highscores" />;
}
