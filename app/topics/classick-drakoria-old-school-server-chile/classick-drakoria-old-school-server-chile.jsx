import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-old-school-server-chile');
}

export default function ClassickDrakoriaOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-old-school-server-chile" />;
}
