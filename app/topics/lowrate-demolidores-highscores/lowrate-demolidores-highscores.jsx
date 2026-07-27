import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-demolidores-highscores');
}

export default function LowrateDemolidoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-demolidores-highscores" />;
}
