import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-old-school-server-chile');
}

export default function RuthlessChaosOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-old-school-server-chile" />;
}
