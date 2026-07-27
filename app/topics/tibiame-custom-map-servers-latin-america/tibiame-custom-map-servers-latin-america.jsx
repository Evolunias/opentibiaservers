import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-custom-map-servers-latin-america');
}

export default function TibiameCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-custom-map-servers-latin-america" />;
}
