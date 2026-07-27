import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-12-custom-map-servers');
}

export default function Tibiara12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-12-custom-map-servers" />;
}
