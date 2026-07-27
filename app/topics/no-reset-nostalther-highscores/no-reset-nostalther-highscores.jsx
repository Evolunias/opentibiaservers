import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nostalther-highscores');
}

export default function NoResetNostaltherHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nostalther-highscores" />;
}
