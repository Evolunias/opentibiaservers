import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-custom-map-servers-north-america');
}

export default function TibiameCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-custom-map-servers-north-america" />;
}
