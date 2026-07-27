import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibianus-highscores');
}

export default function NoResetTibianusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibianus-highscores" />;
}
