import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-15-real-map-server');
}

export default function Tibiame15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-15-real-map-server" />;
}
