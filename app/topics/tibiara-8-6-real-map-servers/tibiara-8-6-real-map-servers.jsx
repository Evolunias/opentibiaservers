import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-6-real-map-servers');
}

export default function Tibiara86RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-6-real-map-servers" />;
}
