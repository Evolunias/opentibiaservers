import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-season-chile');
}

export default function OldSchoolSeasonChileKeywordPage() {
  return <StaticKeywordPage slug="old-school-season-chile" />;
}
