import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dura-online-highscores');
}

export default function ActiveDuraOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-dura-online-highscores" />;
}
