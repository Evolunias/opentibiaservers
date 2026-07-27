import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-13-real-map-servers');
}

export default function Tibiame13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-13-real-map-servers" />;
}
