import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-real-map-server-canada');
}

export default function TibiameRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-real-map-server-canada" />;
}
