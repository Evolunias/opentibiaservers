import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-server-list-chile');
}

export default function OldSchoolServerListChileKeywordPage() {
  return <StaticKeywordPage slug="old-school-server-list-chile" />;
}
