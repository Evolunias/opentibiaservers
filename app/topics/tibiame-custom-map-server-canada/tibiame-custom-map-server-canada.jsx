import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-custom-map-server-canada');
}

export default function TibiameCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-custom-map-server-canada" />;
}
