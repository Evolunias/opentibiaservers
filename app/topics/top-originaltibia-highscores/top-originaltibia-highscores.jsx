import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-originaltibia-highscores');
}

export default function TopOriginaltibiaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-originaltibia-highscores" />;
}
