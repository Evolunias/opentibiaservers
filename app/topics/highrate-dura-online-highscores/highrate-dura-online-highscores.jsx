import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-dura-online-highscores');
}

export default function HighrateDuraOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-dura-online-highscores" />;
}
