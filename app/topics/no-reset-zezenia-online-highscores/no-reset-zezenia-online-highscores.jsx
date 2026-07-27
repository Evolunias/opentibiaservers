import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-zezenia-online-highscores');
}

export default function NoResetZezeniaOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-zezenia-online-highscores" />;
}
