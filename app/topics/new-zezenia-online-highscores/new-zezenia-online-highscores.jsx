import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zezenia-online-highscores');
}

export default function NewZezeniaOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-zezenia-online-highscores" />;
}
