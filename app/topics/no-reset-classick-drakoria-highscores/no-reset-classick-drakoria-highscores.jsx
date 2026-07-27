import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classick-drakoria-highscores');
}

export default function NoResetClassickDrakoriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classick-drakoria-highscores" />;
}
