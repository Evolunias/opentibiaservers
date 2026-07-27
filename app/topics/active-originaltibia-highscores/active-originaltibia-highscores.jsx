import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-originaltibia-highscores');
}

export default function ActiveOriginaltibiaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-originaltibia-highscores" />;
}
