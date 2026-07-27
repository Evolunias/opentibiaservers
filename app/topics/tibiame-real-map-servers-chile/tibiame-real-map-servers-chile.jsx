import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-real-map-servers-chile');
}

export default function TibiameRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="tibiame-real-map-servers-chile" />;
}
