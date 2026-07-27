import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvpe-server-chile');
}

export default function RuthlessChaosPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvpe-server-chile" />;
}
