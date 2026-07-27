import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-demolidores-highscores');
}

export default function CurrentDemolidoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-demolidores-highscores" />;
}
