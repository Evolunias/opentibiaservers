import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-kasteria-highscores');
}

export default function NoResetKasteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-kasteria-highscores" />;
}
