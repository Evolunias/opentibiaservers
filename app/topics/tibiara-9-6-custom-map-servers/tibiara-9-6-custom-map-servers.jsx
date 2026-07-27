import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-9-6-custom-map-servers');
}

export default function Tibiara96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-9-6-custom-map-servers" />;
}
