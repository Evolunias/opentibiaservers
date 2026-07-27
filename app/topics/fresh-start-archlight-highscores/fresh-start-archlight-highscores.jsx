import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-archlight-highscores');
}

export default function FreshStartArchlightHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-archlight-highscores" />;
}
