import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-archlight-highscores');
}

export default function OfficialArchlightHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-archlight-highscores" />;
}
