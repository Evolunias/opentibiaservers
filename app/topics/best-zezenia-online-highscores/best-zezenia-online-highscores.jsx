import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-zezenia-online-highscores');
}

export default function BestZezeniaOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-zezenia-online-highscores" />;
}
