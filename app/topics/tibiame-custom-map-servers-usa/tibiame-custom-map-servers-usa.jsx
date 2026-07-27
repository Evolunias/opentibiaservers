import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-custom-map-servers-usa');
}

export default function TibiameCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-custom-map-servers-usa" />;
}
