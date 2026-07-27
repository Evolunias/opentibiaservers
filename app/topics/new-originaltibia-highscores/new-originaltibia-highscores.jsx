import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-originaltibia-highscores');
}

export default function NewOriginaltibiaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-originaltibia-highscores" />;
}
