import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-custom-map-servers-chile');
}

export default function RuthlessChaosCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-custom-map-servers-chile" />;
}
