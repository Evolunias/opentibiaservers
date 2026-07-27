import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-custom-map-server-brazil');
}

export default function TibiameCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiame-custom-map-server-brazil" />;
}
