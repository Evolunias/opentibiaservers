import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-client-chile');
}

export default function OldSchoolClientChileKeywordPage() {
  return <StaticKeywordPage slug="old-school-client-chile" />;
}
