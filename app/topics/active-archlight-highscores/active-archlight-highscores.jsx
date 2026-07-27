import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-archlight-highscores');
}

export default function ActiveArchlightHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-archlight-highscores" />;
}
