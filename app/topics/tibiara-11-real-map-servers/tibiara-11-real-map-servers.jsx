import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-11-real-map-servers');
}

export default function Tibiara11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-11-real-map-servers" />;
}
