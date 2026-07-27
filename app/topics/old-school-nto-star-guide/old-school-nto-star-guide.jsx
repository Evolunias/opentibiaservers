import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nto-star-guide');
}

export default function OldSchoolNtoStarGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-nto-star-guide" />;
}
