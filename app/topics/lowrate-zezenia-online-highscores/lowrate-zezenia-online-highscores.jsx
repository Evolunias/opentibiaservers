import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-zezenia-online-highscores');
}

export default function LowrateZezeniaOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-zezenia-online-highscores" />;
}
