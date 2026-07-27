import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zezenia-online-highscores');
}

export default function PopularZezeniaOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-zezenia-online-highscores" />;
}
