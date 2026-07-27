import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-old-school-server-chile');
}

export default function ElderaOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="eldera-old-school-server-chile" />;
}
