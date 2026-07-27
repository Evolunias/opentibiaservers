import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-9-6-real-map-servers');
}

export default function Tibiame96RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-9-6-real-map-servers" />;
}
