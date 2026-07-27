import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-old-school-server-chile');
}

export default function MadnessaliveOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-old-school-server-chile" />;
}
