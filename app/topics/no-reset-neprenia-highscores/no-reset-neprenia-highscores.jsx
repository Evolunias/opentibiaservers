import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-neprenia-highscores');
}

export default function NoResetNepreniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-neprenia-highscores" />;
}
