import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-madnessalive-highscores');
}

export default function NoResetMadnessaliveHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-madnessalive-highscores" />;
}
