import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-archlight-highscores');
}

export default function NewArchlightHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-archlight-highscores" />;
}
