import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-old-school-server-chile');
}

export default function BlazeraOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="blazera-old-school-server-chile" />;
}
