import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-custom-map-server-mexico');
}

export default function TibiameCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiame-custom-map-server-mexico" />;
}
