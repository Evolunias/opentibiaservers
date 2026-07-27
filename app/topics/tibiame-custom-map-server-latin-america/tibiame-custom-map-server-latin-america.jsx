import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-custom-map-server-latin-america');
}

export default function TibiameCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-custom-map-server-latin-america" />;
}
