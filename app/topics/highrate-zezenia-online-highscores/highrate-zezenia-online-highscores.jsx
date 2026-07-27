import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-zezenia-online-highscores');
}

export default function HighrateZezeniaOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-zezenia-online-highscores" />;
}
