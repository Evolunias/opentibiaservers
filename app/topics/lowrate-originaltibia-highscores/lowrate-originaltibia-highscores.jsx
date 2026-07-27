import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-originaltibia-highscores');
}

export default function LowrateOriginaltibiaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-originaltibia-highscores" />;
}
