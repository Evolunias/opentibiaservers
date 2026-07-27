import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-1-real-map-server');
}

export default function Tibiame71RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-1-real-map-server" />;
}
