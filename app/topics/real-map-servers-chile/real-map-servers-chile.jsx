import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-servers-chile');
}

export default function RealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="real-map-servers-chile" />;
}
