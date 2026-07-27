import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-demolidores-highscores');
}

export default function HighrateDemolidoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-demolidores-highscores" />;
}
