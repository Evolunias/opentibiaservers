import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-highscores');
}

export default function DuraOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="dura-online-highscores" />;
}
