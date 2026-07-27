import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-aurera-global-highscores');
}

export default function NoResetAureraGlobalHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-aurera-global-highscores" />;
}
