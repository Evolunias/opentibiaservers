import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nilot-highscores');
}

export default function NoResetNilotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nilot-highscores" />;
}
