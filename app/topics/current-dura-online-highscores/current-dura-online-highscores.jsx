import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dura-online-highscores');
}

export default function CurrentDuraOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-dura-online-highscores" />;
}
