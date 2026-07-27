import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-baiak-server-chile');
}

export default function RuthlessChaosBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-baiak-server-chile" />;
}
