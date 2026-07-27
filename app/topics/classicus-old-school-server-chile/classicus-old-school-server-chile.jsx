import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-old-school-server-chile');
}

export default function ClassicusOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="classicus-old-school-server-chile" />;
}
