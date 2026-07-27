import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvpe-server-chile');
}

export default function OriginaltibiaPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvpe-server-chile" />;
}
