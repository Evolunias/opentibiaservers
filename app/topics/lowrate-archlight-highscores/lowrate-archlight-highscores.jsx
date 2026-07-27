import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-archlight-highscores');
}

export default function LowrateArchlightHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-archlight-highscores" />;
}
