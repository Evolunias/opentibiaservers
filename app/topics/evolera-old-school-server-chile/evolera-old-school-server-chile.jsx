import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-old-school-server-chile');
}

export default function EvoleraOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="evolera-old-school-server-chile" />;
}
