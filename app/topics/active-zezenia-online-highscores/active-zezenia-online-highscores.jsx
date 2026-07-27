import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zezenia-online-highscores');
}

export default function ActiveZezeniaOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-zezenia-online-highscores" />;
}
