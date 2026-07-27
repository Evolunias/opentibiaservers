import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-archlight-highscores');
}

export default function OldSchoolArchlightHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-archlight-highscores" />;
}
