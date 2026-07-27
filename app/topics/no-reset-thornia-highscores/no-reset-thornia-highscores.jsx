import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thornia-highscores');
}

export default function NoResetThorniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thornia-highscores" />;
}
