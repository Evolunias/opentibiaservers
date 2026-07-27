import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-originaltibia-highscores');
}

export default function PopularOriginaltibiaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-originaltibia-highscores" />;
}
