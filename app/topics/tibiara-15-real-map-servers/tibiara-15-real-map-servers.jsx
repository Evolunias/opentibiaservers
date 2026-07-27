import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-15-real-map-servers');
}

export default function Tibiara15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-15-real-map-servers" />;
}
