import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-10-0-custom-map-servers');
}

export default function Tibiara100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-10-0-custom-map-servers" />;
}
