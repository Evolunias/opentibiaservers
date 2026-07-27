import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-server-chile');
}

export default function OldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="old-school-server-chile" />;
}
