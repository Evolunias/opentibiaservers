import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zezenia-online-highscores');
}

export default function TopZezeniaOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-zezenia-online-highscores" />;
}
