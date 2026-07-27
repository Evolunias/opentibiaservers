import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-mist-of-death-highscores');
}

export default function NoResetMistOfDeathHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-mist-of-death-highscores" />;
}
