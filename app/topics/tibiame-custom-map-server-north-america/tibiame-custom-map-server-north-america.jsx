import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-custom-map-server-north-america');
}

export default function TibiameCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-custom-map-server-north-america" />;
}
