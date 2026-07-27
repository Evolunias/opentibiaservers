import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-old-school-server-chile');
}

export default function OlderaOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="oldera-old-school-server-chile" />;
}
