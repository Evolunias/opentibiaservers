import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-status-chile');
}

export default function OldSchoolStatusChileKeywordPage() {
  return <StaticKeywordPage slug="old-school-status-chile" />;
}
