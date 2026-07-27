import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-real-map-server-chile');
}

export default function RuthlessChaosRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-real-map-server-chile" />;
}
