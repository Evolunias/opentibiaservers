import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-1-real-map-servers');
}

export default function Tibiara71RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-1-real-map-servers" />;
}
