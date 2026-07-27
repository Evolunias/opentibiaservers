import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eternal-odyssey-highscores');
}

export default function NoResetEternalOdysseyHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eternal-odyssey-highscores" />;
}
