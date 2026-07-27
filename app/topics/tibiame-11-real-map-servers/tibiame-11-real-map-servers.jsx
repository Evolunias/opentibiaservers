import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-11-real-map-servers');
}

export default function Tibiame11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-11-real-map-servers" />;
}
