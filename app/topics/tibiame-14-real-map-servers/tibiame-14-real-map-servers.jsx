import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-14-real-map-servers');
}

export default function Tibiame14RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-14-real-map-servers" />;
}
