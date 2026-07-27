import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-custom-map-server-chile');
}

export default function TibiameCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiame-custom-map-server-chile" />;
}
