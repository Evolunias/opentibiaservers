import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-archlight-highscores');
}

export default function NewSeasonArchlightHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-archlight-highscores" />;
}
