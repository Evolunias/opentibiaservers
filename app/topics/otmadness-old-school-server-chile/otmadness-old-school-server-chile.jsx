import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-old-school-server-chile');
}

export default function OtmadnessOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="otmadness-old-school-server-chile" />;
}
