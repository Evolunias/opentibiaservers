import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-1-real-map-servers');
}

export default function Tibiame81RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-1-real-map-servers" />;
}
