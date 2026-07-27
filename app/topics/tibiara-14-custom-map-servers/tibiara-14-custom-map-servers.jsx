import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-14-custom-map-servers');
}

export default function Tibiara14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-14-custom-map-servers" />;
}
