import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dura-online-highscores');
}

export default function PopularDuraOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-dura-online-highscores" />;
}
