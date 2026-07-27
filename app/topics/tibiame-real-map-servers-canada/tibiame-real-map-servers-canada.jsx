import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-real-map-servers-canada');
}

export default function TibiameRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-real-map-servers-canada" />;
}
