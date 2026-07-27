import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-archlight-highscores');
}

export default function TopArchlightHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-archlight-highscores" />;
}
