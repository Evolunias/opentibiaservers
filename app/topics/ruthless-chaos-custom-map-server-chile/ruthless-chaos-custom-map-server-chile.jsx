import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-custom-map-server-chile');
}

export default function RuthlessChaosCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-custom-map-server-chile" />;
}
