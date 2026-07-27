import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-archlight-highscores');
}

export default function CustomArchlightHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-archlight-highscores" />;
}
