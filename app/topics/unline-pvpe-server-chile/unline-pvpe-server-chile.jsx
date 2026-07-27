import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvpe-server-chile');
}

export default function UnlinePvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="unline-pvpe-server-chile" />;
}
