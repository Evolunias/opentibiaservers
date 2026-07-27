import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-custom-map-servers-mexico');
}

export default function TibiameCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiame-custom-map-servers-mexico" />;
}
