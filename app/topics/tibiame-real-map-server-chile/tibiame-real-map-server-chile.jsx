import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-real-map-server-chile');
}

export default function TibiameRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiame-real-map-server-chile" />;
}
