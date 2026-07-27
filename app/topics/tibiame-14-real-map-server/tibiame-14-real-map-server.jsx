import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-14-real-map-server');
}

export default function Tibiame14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-14-real-map-server" />;
}
