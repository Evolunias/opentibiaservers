import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-10-98-real-map-servers');
}

export default function Tibiame1098RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-10-98-real-map-servers" />;
}
