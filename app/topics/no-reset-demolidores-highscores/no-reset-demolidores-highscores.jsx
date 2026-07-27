import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-demolidores-highscores');
}

export default function NoResetDemolidoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-demolidores-highscores" />;
}
