import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-dura-online-highscores');
}

export default function FreshStartDuraOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-dura-online-highscores" />;
}
