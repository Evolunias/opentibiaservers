import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-dura-online-highscores');
}

export default function BestDuraOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-dura-online-highscores" />;
}
