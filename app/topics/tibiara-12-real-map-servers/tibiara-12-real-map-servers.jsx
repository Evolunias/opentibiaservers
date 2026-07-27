import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-12-real-map-servers');
}

export default function Tibiara12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-12-real-map-servers" />;
}
