import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-0-real-map-server');
}

export default function Tibiame80RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-0-real-map-server" />;
}
