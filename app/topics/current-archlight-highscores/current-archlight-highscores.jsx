import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-archlight-highscores');
}

export default function CurrentArchlightHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-archlight-highscores" />;
}
