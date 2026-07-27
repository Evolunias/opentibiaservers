import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-13-custom-map-servers');
}

export default function Tibiara13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-13-custom-map-servers" />;
}
