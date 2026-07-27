import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-real-map-server-south-america');
}

export default function TibiameRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-real-map-server-south-america" />;
}
