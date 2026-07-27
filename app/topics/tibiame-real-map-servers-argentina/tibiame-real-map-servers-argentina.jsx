import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-real-map-servers-argentina');
}

export default function TibiameRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-real-map-servers-argentina" />;
}
