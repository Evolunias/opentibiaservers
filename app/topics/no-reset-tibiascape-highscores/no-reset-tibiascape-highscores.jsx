import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiascape-highscores');
}

export default function NoResetTibiascapeHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiascape-highscores" />;
}
