import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rubinot-highscores');
}

export default function LowrateRubinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rubinot-highscores" />;
}
