import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ot-server-chile');
}

export default function OldSchoolOtServerChileKeywordPage() {
  return <StaticKeywordPage slug="old-school-ot-server-chile" />;
}
