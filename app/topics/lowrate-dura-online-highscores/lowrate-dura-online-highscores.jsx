import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dura-online-highscores');
}

export default function LowrateDuraOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dura-online-highscores" />;
}
