import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-archlight-highscores');
}

export default function BestArchlightHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-archlight-highscores" />;
}
