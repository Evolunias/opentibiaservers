import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-old-school-server-chile');
}

export default function SaintsotOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="saintsot-old-school-server-chile" />;
}
