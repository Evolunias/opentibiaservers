import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-real-map-server-north-america');
}

export default function TibiameRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-real-map-server-north-america" />;
}
