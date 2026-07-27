import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rubinot-highscores');
}

export default function NoResetRubinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rubinot-highscores" />;
}
