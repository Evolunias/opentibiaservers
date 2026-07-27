import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-old-school-server-chile');
}

export default function AureraGlobalOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-old-school-server-chile" />;
}
