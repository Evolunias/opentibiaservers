import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-old-school-server-chile');
}

export default function ThaisotOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="thaisot-old-school-server-chile" />;
}
