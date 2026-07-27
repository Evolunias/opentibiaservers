import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-zezenia-online-highscores');
}

export default function NewSeasonZezeniaOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-zezenia-online-highscores" />;
}
