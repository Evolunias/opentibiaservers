import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-15-real-map-servers');
}

export default function Tibiame15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-15-real-map-servers" />;
}
