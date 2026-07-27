import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-13-real-map-server');
}

export default function Tibiame13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-13-real-map-server" />;
}
