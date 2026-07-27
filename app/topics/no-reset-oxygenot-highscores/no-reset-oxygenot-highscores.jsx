import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oxygenot-highscores');
}

export default function NoResetOxygenotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oxygenot-highscores" />;
}
