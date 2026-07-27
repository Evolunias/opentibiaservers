import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-9-6-real-map-servers');
}

export default function Tibiara96RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-9-6-real-map-servers" />;
}
