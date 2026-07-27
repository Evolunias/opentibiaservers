import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-0-real-map-servers');
}

export default function Tibiame80RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-0-real-map-servers" />;
}
