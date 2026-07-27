import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-10-0-real-map-servers');
}

export default function Tibiame100RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-10-0-real-map-servers" />;
}
