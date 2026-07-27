import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-unline-highscores');
}

export default function NoResetUnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-unline-highscores" />;
}
