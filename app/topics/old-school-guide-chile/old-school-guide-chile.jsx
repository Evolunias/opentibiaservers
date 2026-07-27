import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-guide-chile');
}

export default function OldSchoolGuideChileKeywordPage() {
  return <StaticKeywordPage slug="old-school-guide-chile" />;
}
