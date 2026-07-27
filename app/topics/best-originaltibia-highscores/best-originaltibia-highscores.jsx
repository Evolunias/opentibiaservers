import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-originaltibia-highscores');
}

export default function BestOriginaltibiaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-originaltibia-highscores" />;
}
