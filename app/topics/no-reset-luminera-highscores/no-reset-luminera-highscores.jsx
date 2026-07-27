import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-luminera-highscores');
}

export default function NoResetLumineraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-luminera-highscores" />;
}
