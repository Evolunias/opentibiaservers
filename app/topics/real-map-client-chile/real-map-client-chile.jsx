import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-client-chile');
}

export default function RealMapClientChileKeywordPage() {
  return <StaticKeywordPage slug="real-map-client-chile" />;
}
