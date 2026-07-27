import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-old-school-server-chile');
}

export default function EmpirebrOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="empirebr-old-school-server-chile" />;
}
