import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-12-real-map-server');
}

export default function Tibiame12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-12-real-map-server" />;
}
