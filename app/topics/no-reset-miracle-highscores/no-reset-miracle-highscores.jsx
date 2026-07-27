import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-miracle-highscores');
}

export default function NoResetMiracleHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-miracle-highscores" />;
}
