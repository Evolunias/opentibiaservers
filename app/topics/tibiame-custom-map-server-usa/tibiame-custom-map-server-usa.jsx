import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-custom-map-server-usa');
}

export default function TibiameCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-custom-map-server-usa" />;
}
