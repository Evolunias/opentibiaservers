import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zezenia-online-highscores');
}

export default function CustomZezeniaOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-zezenia-online-highscores" />;
}
