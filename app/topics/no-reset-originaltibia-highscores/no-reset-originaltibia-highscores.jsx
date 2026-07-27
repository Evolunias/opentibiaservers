import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-originaltibia-highscores');
}

export default function NoResetOriginaltibiaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-originaltibia-highscores" />;
}
