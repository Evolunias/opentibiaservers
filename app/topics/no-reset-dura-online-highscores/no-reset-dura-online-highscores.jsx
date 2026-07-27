import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dura-online-highscores');
}

export default function NoResetDuraOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dura-online-highscores" />;
}
