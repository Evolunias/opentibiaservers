import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-4-custom-map-servers');
}

export default function Tibiara84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-4-custom-map-servers" />;
}
