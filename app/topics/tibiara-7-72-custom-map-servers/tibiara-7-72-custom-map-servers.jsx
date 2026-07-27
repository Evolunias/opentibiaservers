import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-72-custom-map-servers');
}

export default function Tibiara772CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-72-custom-map-servers" />;
}
