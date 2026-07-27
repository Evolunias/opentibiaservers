import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-servers-chile');
}

export default function OldSchoolServersChileKeywordPage() {
  return <StaticKeywordPage slug="old-school-servers-chile" />;
}
