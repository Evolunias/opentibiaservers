import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-custom-map-servers-canada');
}

export default function TibiameCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-custom-map-servers-canada" />;
}
