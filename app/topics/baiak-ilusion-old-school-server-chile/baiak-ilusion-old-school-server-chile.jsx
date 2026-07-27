import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-old-school-server-chile');
}

export default function BaiakIlusionOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-old-school-server-chile" />;
}
