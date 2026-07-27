import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-zezenia-online-highscores');
}

export default function FreshStartZezeniaOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-zezenia-online-highscores" />;
}
