import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dura-online-highscores');
}

export default function TopDuraOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-dura-online-highscores" />;
}
