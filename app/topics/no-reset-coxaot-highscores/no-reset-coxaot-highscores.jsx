import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-coxaot-highscores');
}

export default function NoResetCoxaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-coxaot-highscores" />;
}
