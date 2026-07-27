import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zezenia-online-highscores');
}

export default function CurrentZezeniaOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-zezenia-online-highscores" />;
}
