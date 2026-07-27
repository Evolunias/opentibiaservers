import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dura-online-highscores');
}

export default function NewDuraOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-dura-online-highscores" />;
}
