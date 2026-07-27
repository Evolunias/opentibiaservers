import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-custom-map-server-argentina');
}

export default function TibiameCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-custom-map-server-argentina" />;
}
