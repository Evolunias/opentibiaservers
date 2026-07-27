import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-10-0-custom-map-servers');
}

export default function Tibiame100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-10-0-custom-map-servers" />;
}
