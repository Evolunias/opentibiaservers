import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-6-real-map-servers');
}

export default function Tibiame86RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-6-real-map-servers" />;
}
