import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvpe-server-chile');
}

export default function BlazeraPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvpe-server-chile" />;
}
