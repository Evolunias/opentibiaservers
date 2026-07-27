import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-midhem-highscores');
}

export default function NoResetMidhemHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-midhem-highscores" />;
}
