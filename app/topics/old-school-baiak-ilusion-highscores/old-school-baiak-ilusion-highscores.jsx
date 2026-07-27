import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-baiak-ilusion-highscores');
}

export default function OldSchoolBaiakIlusionHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-baiak-ilusion-highscores" />;
}
