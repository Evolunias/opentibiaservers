import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-old-school-server-chile');
}

export default function MiracleOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="miracle-old-school-server-chile" />;
}
