import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-old-school-server-chile');
}

export default function HarmoniaOtOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-old-school-server-chile" />;
}
