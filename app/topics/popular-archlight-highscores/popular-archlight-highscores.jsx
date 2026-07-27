import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-archlight-highscores');
}

export default function PopularArchlightHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-archlight-highscores" />;
}
