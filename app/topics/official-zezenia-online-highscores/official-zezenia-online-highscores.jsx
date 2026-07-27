import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zezenia-online-highscores');
}

export default function OfficialZezeniaOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-zezenia-online-highscores" />;
}
