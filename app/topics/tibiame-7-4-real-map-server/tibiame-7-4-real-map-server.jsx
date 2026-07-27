import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-4-real-map-server');
}

export default function Tibiame74RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-4-real-map-server" />;
}
