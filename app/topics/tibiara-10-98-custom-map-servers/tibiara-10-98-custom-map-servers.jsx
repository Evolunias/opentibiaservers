import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-10-98-custom-map-servers');
}

export default function Tibiara1098CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-10-98-custom-map-servers" />;
}
