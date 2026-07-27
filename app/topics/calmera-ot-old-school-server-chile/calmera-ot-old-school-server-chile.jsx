import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-old-school-server-chile');
}

export default function CalmeraOtOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-old-school-server-chile" />;
}
