import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-15-custom-map-servers');
}

export default function Tibiara15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-15-custom-map-servers" />;
}
