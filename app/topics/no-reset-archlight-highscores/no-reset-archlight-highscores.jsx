import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-archlight-highscores');
}

export default function NoResetArchlightHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-archlight-highscores" />;
}
