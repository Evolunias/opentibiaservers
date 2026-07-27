import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-11-custom-map-servers');
}

export default function Tibiara11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-11-custom-map-servers" />;
}
