import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-12-real-map-servers');
}

export default function Tibiame12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-12-real-map-servers" />;
}
