import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-originaltibia-highscores');
}

export default function FreshStartOriginaltibiaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-originaltibia-highscores" />;
}
