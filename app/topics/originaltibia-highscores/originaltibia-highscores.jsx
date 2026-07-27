import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-highscores');
}

export default function OriginaltibiaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-highscores" />;
}
