import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-canob-highscores');
}

export default function NoResetCanobHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-canob-highscores" />;
}
