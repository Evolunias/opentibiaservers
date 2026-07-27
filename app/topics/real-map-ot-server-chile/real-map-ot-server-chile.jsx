import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ot-server-chile');
}

export default function RealMapOtServerChileKeywordPage() {
  return <StaticKeywordPage slug="real-map-ot-server-chile" />;
}
