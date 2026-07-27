import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-neprenia-guide');
}

export default function OldSchoolNepreniaGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-neprenia-guide" />;
}
