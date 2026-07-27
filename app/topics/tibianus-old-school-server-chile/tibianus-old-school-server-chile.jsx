import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-old-school-server-chile');
}

export default function TibianusOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibianus-old-school-server-chile" />;
}
