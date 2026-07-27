import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-real-map-servers-north-america');
}

export default function TibiameRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-real-map-servers-north-america" />;
}
