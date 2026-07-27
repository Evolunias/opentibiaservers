import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-4-real-map-server');
}

export default function Tibiame84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-4-real-map-server" />;
}
