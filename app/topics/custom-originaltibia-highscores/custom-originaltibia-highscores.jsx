import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-originaltibia-highscores');
}

export default function CustomOriginaltibiaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-originaltibia-highscores" />;
}
